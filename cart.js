// Cart module - localStorage based cart with bill
(function() {
  function getCart() { return JSON.parse(localStorage.getItem('bp_cart') || '[]'); }
  function saveCart(cart) { localStorage.setItem('bp_cart', JSON.stringify(cart)); updateBadge(); }

  function updateBadge() {
    const cart = getCart();
    const count = cart.reduce((s, i) => s + i.qty, 0);
    document.querySelectorAll('.cart-badge').forEach(el => {
      el.textContent = count;
      el.classList.toggle('hidden', count === 0);
    });
  }

  window.Cart = {
    getAll() { return getCart(); },
    add(product, qty = 1) {
      if (!Auth.isLoggedIn()) {
        window.openAuthModal && window.openAuthModal(() => Cart.add(product, qty));
        return false;
      }
      let cart = getCart();
      const idx = cart.findIndex(i => i.id === product.id);
      if (idx > -1) cart[idx].qty += qty;
      else cart.push({ id: product.id, name: product.name, price: product.price, image: product.image, category: product.category, qty });
      saveCart(cart);
      window.showToast && window.showToast(product.name + ' added to cart! 🛒', 'success');
      return true;
    },
    remove(productId) {
      let cart = getCart().filter(i => i.id !== productId);
      saveCart(cart);
    },
    updateQty(productId, qty) {
      let cart = getCart();
      const idx = cart.findIndex(i => i.id === productId);
      if (idx > -1) {
        if (qty <= 0) cart.splice(idx, 1);
        else cart[idx].qty = qty;
      }
      saveCart(cart);
    },
    getCount() { return getCart().reduce((s, i) => s + i.qty, 0); },
    getSubtotal() { return getCart().reduce((s, i) => s + i.price * i.qty, 0); },
    clear() { saveCart([]); }
  };

  document.addEventListener('DOMContentLoaded', updateBadge);
})();
