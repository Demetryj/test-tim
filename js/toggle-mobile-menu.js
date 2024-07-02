(() => {
  const menuBtnRef = document.querySelector('[data-menu-button]');
  const closeMenuBtnRef = document.querySelector('[data-close-menu-button]');
  const backdropMobileMenu = document.querySelector('[data-backdrop-menu]');
  const mobileMenuRef = document.querySelector('[data-menu]');

  menuBtnRef.addEventListener('click', () => {
    backdropMobileMenu.classList.add('is-open');
    mobileMenuRef.classList.add('is-open');

    document.body.style.overflow = 'hidden';
  });

  closeMenuBtnRef.addEventListener('click', () => {
    setTimeout(() => {
      backdropMobileMenu.classList.remove('is-open');
    }, 500);

    mobileMenuRef.classList.remove('is-open');

    document.body.style.overflow = 'auto';
  });
})();
