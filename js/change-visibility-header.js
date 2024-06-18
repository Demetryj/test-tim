(() => {
  window.addEventListener('scroll', function () {
    const screenWidth =
      window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

    const header = document.getElementById('header');
    const target = document.getElementById('target');
    const targetPosition = target.getBoundingClientRect().top;

    if (screenWidth >= 1200) {
      if (targetPosition <= 0) {
        header.classList.add('visible');
      } else {
        header.classList.remove('visible');
      }
    }
  });
})();
