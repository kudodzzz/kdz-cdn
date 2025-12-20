// (c) 2025 Copyright by Kudodzzz.
// GitHub: https://github.com/kudodzzz/kdz-cdn

(() => {
  const targetDomain = 'watch.kdz.ct.ws';


  if (
    location.hostname === targetDomain &&
    location.protocol === 'http:' &&
    !isLocalhost
  ) {
    location.replace(
      'https://' +
      location.host +
      location.pathname +
      location.search +
      location.hash
    );
  }
})();

document.documentElement.style.overflow = 'hidden';

document.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    const l = document.getElementById('loading');
    if (l) {
      l.classList.add('hide');
      setTimeout(() => {
        l.remove();
        document.documentElement.style.overflow = '';
      }, 600);
    }
  }, 1200);
});
