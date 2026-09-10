(() => {
  // Footer year
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Mobile nav toggle
  const navToggle = document.getElementById('navToggle');
  const mainNav = document.getElementById('mainNav');
  if (navToggle && mainNav) {
    navToggle.addEventListener('click', () => {
      const isOpen = mainNav.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', String(isOpen));
    });
    mainNav.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        mainNav.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // Scroll-reveal animations (progressive enhancement — elements are
  // visible by default in CSS; this only arms + animates them, with a
  // timed fallback so nothing can end up permanently hidden).
  const revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && revealEls.length) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
    );
    revealEls.forEach((el) => {
      el.classList.add('reveal-armed');
      observer.observe(el);
    });
    // Safety net: guarantee full visibility shortly after load even if
    // an element's intersection is never reported.
    window.setTimeout(() => {
      revealEls.forEach((el) => el.classList.add('in-view'));
    }, 2000);
  }

  // Consultation request form (front-end only demo submission)
  const form = document.getElementById('consultForm');
  const note = document.getElementById('formNote');
  if (form && note) {
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      if (!form.checkValidity()) {
        form.reportValidity();
        return;
      }
      const name = document.getElementById('fname').value.trim().split(' ')[0];
      note.textContent = `Thank you${name ? ', ' + name : ''}! We'll call you soon to schedule your free consultation.`;
      form.reset();
    });
  }
})();
