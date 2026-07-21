(() => {
  const desktopBreakpoint = 860;

  document.querySelectorAll('[data-mobile-nav]').forEach((nav) => {
    const toggle = nav.querySelector('.nav-toggle');
    const menu = nav.querySelector('.nav-links');
    const label = toggle?.querySelector('.sr-only');
    if (!toggle || !menu) return;

    const setOpen = (open) => {
      toggle.setAttribute('aria-expanded', String(open));
      menu.classList.toggle('is-open', open);
      if (label) label.textContent = open ? 'Close navigation' : 'Open navigation';
    };

    toggle.addEventListener('click', () => {
      setOpen(toggle.getAttribute('aria-expanded') !== 'true');
    });

    menu.addEventListener('click', (event) => {
      if (event.target.closest('a')) setOpen(false);
    });

    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
        setOpen(false);
        toggle.focus();
      }
    });

    window.addEventListener('resize', () => {
      if (window.innerWidth > desktopBreakpoint) setOpen(false);
    });
  });
})();
