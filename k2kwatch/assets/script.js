// (c) 2025 Copyright by Kudodzzz.
// GitHub: https://github.com/kudodzzz/K2KWatch

// //force https immediately
// if (location.protocol === 'http:') {
//   location.replace('https://' + location.host + location.pathname + location.search + location.hash);
// }

//disable scroll while loading
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
