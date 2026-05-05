// Compare module
(function() {
  function getCompare() { return JSON.parse(localStorage.getItem('bp_compare') || '[]'); }
  function saveCompare(ids) { localStorage.setItem('bp_compare', JSON.stringify(ids)); }

  window.Compare = {
    getIds() { return getCompare(); },
    toggle(id) {
      let ids = getCompare();
      const idx = ids.indexOf(id);
      if (idx > -1) { ids.splice(idx, 1); }
      else {
        if (ids.length >= 3) { window.showToast && window.showToast('You can compare up to 3 products.', 'info'); return false; }
        ids.push(id);
      }
      saveCompare(ids);
      return true;
    },
    has(id) { return getCompare().includes(id); },
    remove(id) { saveCompare(getCompare().filter(i => i !== id)); },
    clear() { saveCompare([]); }
  };
})();

// ---- Shared product card renderer ----
function buildProductCard(product) {
  const inCompare = Compare.has(product.id);
  const fallback = (typeof FLOWER_FALLBACKS !== 'undefined' && FLOWER_FALLBACKS[product.flowerType]) || 'images/rose_bouquet.png';
  return `
    <div class="product-card" data-id="${product.id}">
      <div class="product-card-image">
        <img src="${product.image}" alt="${product.name}" loading="lazy" onerror="this.src='${fallback}';this.onerror=null;">
        <span class="product-card-badge badge-occasion">${product.category}</span>
        <div class="product-card-compare">
          <input type="checkbox" class="compare-checkbox" id="cmp-${product.id}"
            ${inCompare ? 'checked' : ''} onchange="handleCompareToggle(${product.id}, this)">
          <label for="cmp-${product.id}" class="compare-label">
            ${inCompare ? 'In Compare' : '+ Compare'}
          </label>
        </div>
      </div>
      <div class="product-card-body">
        <h3 class="product-card-name">${product.name}</h3>
        <p class="product-card-summary">${product.summary}</p>
        <div class="product-card-meta">
          <div class="product-price">${formatPrice(product.price)}<span> /piece</span></div>
          <div class="product-rating">★ ${product.rating} <span style="color:var(--text-muted)">(${product.reviews})</span></div>
        </div>
        <div class="product-card-actions">
          <button class="btn btn-outline btn-sm" onclick="window.location.href='product-detail.html?id=${product.id}'">Details</button>
          <button class="btn btn-primary btn-sm" onclick="Cart.add(${JSON.stringify(product).replace(/"/g, '&quot;')})">Add</button>
        </div>
      </div>
    </div>`;
}

function handleCompareToggle(id, checkbox) {
  const result = Compare.toggle(id);
  const label = checkbox.nextElementSibling;
  if (checkbox.checked) {
    if (!Compare.has(id)) { checkbox.checked = false; return; }
    label.textContent = 'In Compare';
  } else {
    label.textContent = '+ Compare';
  }
  updateCompareBar();
}

function updateCompareBar() {
  const bar = document.getElementById('compareBar');
  if (!bar) return;
  const ids = Compare.getIds();
  if (ids.length > 0) {
    bar.classList.remove('hidden');
    document.getElementById('compareCount').textContent = ids.length;
  } else {
    bar.classList.add('hidden');
  }
}

window.buildProductCard = buildProductCard;
window.handleCompareToggle = handleCompareToggle;
window.updateCompareBar = updateCompareBar;
