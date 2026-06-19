document.addEventListener('DOMContentLoaded', () => {

  // 1. Zsugorodó fejléc görgetésre
  const header = document.getElementById('main-header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // 2. Mobil Hamburger Menü vezérlése
  const menuToggle = document.getElementById('menu-toggle-btn');
  const navMenu = document.getElementById('nav-menu-list');
  const navLinks = document.querySelectorAll('.nav-link');

  const toggleMenu = () => {
    const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
    menuToggle.setAttribute('aria-expanded', !isExpanded);
    menuToggle.classList.toggle('active');
    navMenu.classList.toggle('active');
  };

  const closeMenu = () => {
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.classList.remove('active');
    navMenu.classList.remove('active');
  };

  menuToggle.addEventListener('click', toggleMenu);

  // Menü bezárása, ha rákattintunk egy linkre
  navLinks.forEach(link => {
    link.addEventListener('click', closeMenu);
  });

  // Menü bezárása, ha a menün kívülre kattintunk
  document.addEventListener('click', (e) => {
    if (!menuToggle.contains(e.target) && !navMenu.contains(e.target)) {
      closeMenu();
    }
  });

  // 3. Smooth Scroll (Lágy görgetés) belső hivatkozásokhoz
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        
        // Zárjuk be a mobilmenüt, ha nyitva volt
        closeMenu();

        const offsetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - 90;
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });

  // 4. Kapcsolatfelvételi űrlap validáció és AJAX Formspree beküldés
  const form = document.getElementById('nursery-contact-form');
  const statusBox = document.getElementById('form-status-box');
  const submitBtn = document.getElementById('form-submit-btn');

  // Input mezők és hozzájuk tartozó hibaüzenetek
  const fields = [
    { id: 'parent-name', errorId: 'parent-name-error' },
    { id: 'child-name', errorId: 'child-name-error' },
    { id: 'email', errorId: 'email-error' },
    { id: 'phone', errorId: 'phone-error' }
  ];

  // Egyedi valós idejű validáció
  const validateField = (input, errorEl) => {
    let isValid = true;
    
    if (input.type === 'email') {
      // Egyszerű email regex
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      isValid = emailRegex.test(input.value.trim());
    } else if (input.type === 'tel') {
      // Telefonszám regex
      const phoneRegex = /^\+?[0-9\s\-]{9,15}$/;
      isValid = phoneRegex.test(input.value.trim());
    } else {
      // Általános kötelező mező ellenőrzés
      isValid = input.value.trim() !== '';
    }

    if (isValid) {
      input.classList.remove('user-invalid');
      errorEl.style.display = 'none';
      return true;
    } else {
      input.classList.add('user-invalid');
      errorEl.style.display = 'block';
      return false;
    }
  };

  // Eseménykezelők az interaktív validációhoz
  fields.forEach(field => {
    const input = document.getElementById(field.id);
    const errorEl = document.getElementById(field.errorId);
    
    input.addEventListener('blur', () => validateField(input, errorEl));
    input.addEventListener('input', () => {
      if (input.classList.contains('user-invalid')) {
        validateField(input, errorEl);
      }
    });
  });

  // Form elküldése
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    let isFormValid = true;
    
    // Minden mező ellenőrzése
    fields.forEach(field => {
      const input = document.getElementById(field.id);
      const errorEl = document.getElementById(field.errorId);
      const isFieldValid = validateField(input, errorEl);
      if (!isFieldValid) isFormValid = false;
    });

    // Adatvédelmi nyilatkozat ellenőrzése
    const privacyCheck = document.getElementById('privacy-check');
    if (!privacyCheck.checked) {
      isFormValid = false;
      privacyCheck.nextElementSibling.style.color = '#E63946';
    } else {
      privacyCheck.nextElementSibling.style.color = '';
    }

    if (!isFormValid) {
      statusBox.className = 'form-status error';
      statusBox.innerHTML = `
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <circle cx="12" cy="12" r="10"></circle>
          <line x1="12" y1="8" x2="12" y2="12"></line>
          <line x1="12" y1="16" x2="12.01" y2="16"></line>
        </svg>
        <span>Kérjük, tölts ki minden kötelező mezőt helyesen és fogadd el az adatvédelmi tájékoztatót!</span>
      `;
      statusBox.style.display = 'flex';
      statusBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      return;
    }

    // Küldés folyamatban állapot
    submitBtn.disabled = true;
    const origBtnText = submitBtn.innerHTML;
    submitBtn.innerHTML = `
      <span>Küldés folyamatban...</span>
      <svg class="spinner" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="animation: spin 1s linear infinite;">
        <circle cx="12" cy="12" r="10" stroke-dasharray="30 30"></circle>
      </svg>
    `;
    
    // Spinner stílus hozzáadása dinamikusan
    if (!document.getElementById('spinner-style')) {
      const style = document.createElement('style');
      style.id = 'spinner-style';
      style.innerHTML = '@keyframes spin { 100% { transform: rotate(360deg); } }';
      document.head.appendChild(style);
    }

    statusBox.style.display = 'none';

    try {
      // Formspree API beküldés
      const response = await fetch(form.action, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          szulo_neve: document.getElementById('parent-name').value,
          gyermek_adatai: document.getElementById('child-name').value,
          email: document.getElementById('email').value,
          telefon: document.getElementById('phone').value,
          uzenet: document.getElementById('message').value
        })
      });

      if (response.ok) {
        // Sikeres beküldés
        statusBox.className = 'form-status success';
        statusBox.innerHTML = `
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
          <span>Köszönjük! Jelentkezésedet sikeresen továbbítottuk. Hamarosan felvesszük veled a kapcsolatot a megadott elérhetőségeken!</span>
        `;
        statusBox.style.display = 'flex';
        form.reset();
        privacyCheck.checked = false;
      } else {
        throw new Error('Formspree error response');
      }
    } catch (error) {
      // Hiba a beküldés során
      statusBox.className = 'form-status error';
      statusBox.innerHTML = `
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <circle cx="12" cy="12" r="10"></circle>
          <line x1="15" y1="9" x2="9" y2="15"></line>
          <line x1="9" y1="9" x2="15" y2="15"></line>
        </svg>
        <span>Sajnáljuk, hiba történt a küldés során. Kérjük, próbáld meg újra, vagy lépj kapcsolatba velünk közvetlenül a <a href="mailto:kincsek9@gmail.com">kincsek9@gmail.com</a> címen!</span>
      `;
      statusBox.style.display = 'flex';
    } finally {
      // Gomb visszaállítása
      submitBtn.disabled = false;
      submitBtn.innerHTML = origBtnText;
      statusBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  });

  // 5. Görgetési animációk fallback (IntersectionObserver régebbi böngészőkhöz és Firefox-hoz)
  if (!CSS.supports('(animation-timeline: view()) and (animation-range: entry)')) {
    // Elemek kiválasztása, amik animálódni fognak
    const revealTargets = [
      ...document.querySelectorAll('.concept-card'),
      ...document.querySelectorAll('.about-text'),
      ...document.querySelectorAll('.about-image'),
      ...document.querySelectorAll('.timeline-item'),
      ...document.querySelectorAll('.contact-info-card'),
      ...document.querySelectorAll('.contact-form-container')
    ];

    // Osztályok rárakása a kezdeti rejtéshez
    revealTargets.forEach(target => {
      target.classList.add('js-reveal', 'js-reveal-hidden');
    });

    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.remove('js-reveal-hidden');
          entry.target.classList.add('js-reveal-visible');
          // Ha már megjelent, nem kell tovább figyelni
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.15,
      rootMargin: '0px 0px -50px 0px'
    });

    revealTargets.forEach(target => {
      revealObserver.observe(target);
    });
  }
});
