// Auth module - localStorage based login/signup
(function() {
  function getUsers() { return JSON.parse(localStorage.getItem('bp_users') || '[]'); }
  function saveUsers(users) { localStorage.setItem('bp_users', JSON.stringify(users)); }
  function getSession() { return JSON.parse(localStorage.getItem('bp_session') || 'null'); }
  function saveSession(user) { localStorage.setItem('bp_session', JSON.stringify(user)); }
  function clearSession() { localStorage.removeItem('bp_session'); }

  window.Auth = {
    isLoggedIn() { return !!getSession(); },
    currentUser() { return getSession(); },
    login(email, password) {
      const users = getUsers();
      const user = users.find(u => u.email === email && u.password === password);
      if (!user) return { ok: false, msg: "Invalid email or password." };
      saveSession(user);
      return { ok: true, user };
    },
    signup(name, email, password) {
      const users = getUsers();
      if (users.find(u => u.email === email)) return { ok: false, msg: "Email already registered." };
      const user = { name, email, password, id: Date.now() };
      users.push(user);
      saveUsers(users);
      saveSession(user);
      return { ok: true, user };
    },
    logout() { clearSession(); updateNavAuth(); }
  };

  function updateNavAuth() {
    const user = getSession();
    const loginBtn = document.getElementById('loginBtn');
    const userMenu = document.getElementById('userMenu');
    const userName = document.getElementById('userName');
    const navbar = document.getElementById('navbar');
    if (loginBtn && userMenu) {
      if (user) {
        loginBtn.classList.add('hidden');
        userMenu.classList.remove('hidden');
        if (navbar) navbar.classList.add('user-logged-in');
        if (userName) userName.textContent = user.name.split(' ')[0];
      } else {
        loginBtn.classList.remove('hidden');
        userMenu.classList.add('hidden');
        if (navbar) navbar.classList.remove('user-logged-in');
      }
    }

  }

  function buildModal() {
    const el = document.getElementById('authModal');
    if (!el) return;
    const loginForm = el.querySelector('#loginForm');
    const signupForm = el.querySelector('#signupForm');
    const tabs = el.querySelectorAll('.modal-tab');
    const closeBtn = el.querySelector('.modal-close');

    tabs.forEach(tab => tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      const target = tab.dataset.tab;
      loginForm.classList.toggle('hidden', target !== 'login');
      signupForm.classList.toggle('hidden', target !== 'signup');
    }));

    closeBtn && closeBtn.addEventListener('click', () => el.classList.remove('open'));
    el.addEventListener('click', e => { if (e.target === el) el.classList.remove('open'); });

    loginForm && loginForm.addEventListener('submit', e => {
      e.preventDefault();
      const emailInput = loginForm.querySelector('[name=email]');
      const passInput = loginForm.querySelector('[name=password]');
      const errEl = loginForm.querySelector('.form-error');

      Validator.clearErrors(loginForm);

      let hasError = false;
      const emailErr = Validator.validateField(emailInput, { required: true, email: true });
      if (emailErr) { Validator.setError(emailInput, emailErr); hasError = true; }

      const passErr = Validator.validateField(passInput, { required: true, min: 6 });
      if (passErr) { Validator.setError(passInput, passErr); hasError = true; }

      if (hasError) return;

      const res = Auth.login(emailInput.value.trim(), passInput.value);
      if (res.ok) {
        el.classList.remove('open');
        updateNavAuth();
        window.showToast && window.showToast('Welcome back, ' + res.user.name.split(' ')[0] + '! 🌸', 'success');
        if (window._authCallback) { window._authCallback(); window._authCallback = null; }
      } else { if (errEl) errEl.textContent = res.msg; }
    });

    signupForm && signupForm.addEventListener('submit', e => {
      e.preventDefault();
      const nameInput = signupForm.querySelector('[name=name]');
      const emailInput = signupForm.querySelector('[name=email]');
      const passInput = signupForm.querySelector('[name=password]');
      const errEl = signupForm.querySelector('.form-error');

      Validator.clearErrors(signupForm);

      let hasError = false;
      const nameErr = Validator.validateField(nameInput, { required: true, name: true, min: 2 });
      if (nameErr) { Validator.setError(nameInput, nameErr); hasError = true; }

      const emailErr = Validator.validateField(emailInput, { required: true, email: true });
      if (emailErr) { Validator.setError(emailInput, emailErr); hasError = true; }

      const passErr = Validator.validateField(passInput, { required: true, min: 6 });
      if (passErr) { Validator.setError(passInput, passErr); hasError = true; }

      if (hasError) return;

      const res = Auth.signup(nameInput.value.trim(), emailInput.value.trim(), passInput.value);
      if (res.ok) {
        el.classList.remove('open');
        updateNavAuth();
        window.showToast && window.showToast('Account created! Welcome, ' + res.user.name.split(' ')[0] + '! 🌹', 'success');
        if (window._authCallback) { window._authCallback(); window._authCallback = null; }
      } else { if (errEl) errEl.textContent = res.msg; }
    });
  }

  function openAuthModal(callback) {
    const el = document.getElementById('authModal');
    if (!el) return;
    if (callback) window._authCallback = callback;
    el.classList.add('open');
  }
  window.openAuthModal = openAuthModal;

  document.addEventListener('DOMContentLoaded', () => {
    buildModal();
    updateNavAuth();
    const loginBtn = document.getElementById('loginBtn');
    loginBtn && loginBtn.addEventListener('click', () => openAuthModal());
    const logoutBtn = document.getElementById('logoutBtn');
    logoutBtn && logoutBtn.addEventListener('click', () => {
      Auth.logout();
      window.showToast && window.showToast('Logged out successfully.', 'info');
    });
  });
})();
