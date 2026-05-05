// Main JS - shared utilities & navbar
(function() {
  // Toast notifications
  function showToast(msg, type = 'info') {
    let container = document.getElementById('toastContainer');
    if (!container) {
      container = document.createElement('div');
      container.id = 'toastContainer';
      container.className = 'toast-container';
      document.body.appendChild(container);
    }
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.textContent = msg;
    container.appendChild(toast);
    requestAnimationFrame(() => { requestAnimationFrame(() => toast.classList.add('show')); });
    setTimeout(() => {
      toast.classList.remove('show');
      setTimeout(() => toast.remove(), 400);
    }, 3000);
  }
  window.showToast = showToast;
  // Form Validation Utility
  window.Validator = {
    isEmail: (val) => /^(?=.*[a-zA-Z])[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val),
    clearErrors: (form) => {
      form.querySelectorAll('.error').forEach(el => el.classList.remove('error'));
      const globalErr = form.querySelector('.form-error');
      if (globalErr) globalErr.textContent = '';
    },
    setError: (input, msg) => {
      input.classList.add('error');
      let feedback = input.nextElementSibling;
      if (!feedback || !feedback.classList.contains('invalid-feedback')) {
        feedback = document.createElement('div');
        feedback.className = 'invalid-feedback';
        input.parentNode.insertBefore(feedback, input.nextSibling);
      }
      feedback.textContent = msg;
    },
    validateField: (input, rules) => {
      const val = input.value.trim();
      if (rules.required && !val) return rules.msg || "This field is required.";
      if (rules.email && !window.Validator.isEmail(val)) return "Please enter a valid email address.";
      if (rules.name && !/^[a-zA-Z\s.-]+$/.test(val)) return "Name can only contain letters and standard punctuation.";
      if (rules.min && val.length < rules.min) return `Minimum ${rules.min} characters required.`;
      return null;
    }
  };

  // Navbar scroll effect & hamburger
  document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.querySelector('.navbar');
    if (navbar) {
      window.addEventListener('scroll', () => {
        navbar.classList.toggle('scrolled', window.scrollY > 50);
      });
    }

    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('navLinks');
    
    // Create overlay if not exists
    let overlay = document.querySelector('.nav-overlay');
    if (!overlay) {
      overlay = document.createElement('div');
      overlay.className = 'nav-overlay';
      document.body.appendChild(overlay);
    }

    if (hamburger && navLinks) {
      const toggleMenu = () => {
        const isOpen = navLinks.classList.contains('open');
        if (isOpen) {
          navLinks.classList.remove('open');
          hamburger.classList.remove('open');
          overlay.classList.remove('show');
          document.body.style.overflow = '';
        } else {
          navLinks.classList.add('open');
          hamburger.classList.add('open');
          overlay.classList.add('show');
          document.body.style.overflow = 'hidden';
        }
      };

      hamburger.addEventListener('click', toggleMenu);
      overlay.addEventListener('click', toggleMenu);
      navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
        navLinks.classList.remove('open');
        hamburger.classList.remove('open');
        overlay.classList.remove('show');
        document.body.style.overflow = '';
      }));
    }

    // Active nav link
    const path = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-links a').forEach(a => {
      const href = a.getAttribute('href');
      if (href === path || (path === '' && href === 'index.html')) a.classList.add('active');
    });

    // Animate on scroll
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.style.opacity = '1';
          e.target.style.transform = 'translateY(0)';
        }
      });
    }, { threshold: 0.1 });
    document.querySelectorAll('.product-card, .category-card, .feature-card, .testimonial-card').forEach(el => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(20px)';
      el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
      observer.observe(el);
    });

    // Real-time Validation (Block numbers in Name, Alert on only-numbers in Email)
    document.addEventListener('input', (e) => {
      const val = e.target.value;
      if (e.target.name === 'name') {
        if (/[0-9]/.test(val)) {
          e.target.value = val.replace(/[0-9]/g, '');
          window.showToast && window.showToast("Numbers are not allowed in the Name field.", "error");
          e.target.classList.add('error');
        } else {
          e.target.classList.remove('error');
        }
      }
      
      if (e.target.name === 'email') {
        // If there's an @, check if there are letters before it
        if (val.includes('@')) {
          const beforeAt = val.split('@')[0];
          if (/^\d+$/.test(beforeAt)) {
            window.showToast && window.showToast("Email must contain letters before the '@' symbol.", "error");
            e.target.classList.add('error');
          } else {
            e.target.classList.remove('error');
          }
        } else if (/^\d+$/.test(val) && val.length > 0) {
          // If no @ yet and it's only numbers
          window.showToast && window.showToast("Email cannot be just numbers.", "error");
          e.target.classList.add('error');
        } else {
          e.target.classList.remove('error');
        }
      }
    });
  });
})();
