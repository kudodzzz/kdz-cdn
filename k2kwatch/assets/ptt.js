// K2KWatch – PTT JS
// (c) 2025 Copyright by Kudodzzz.
// GitHub: https://github.com/kudodzzz/K2KWatch


const loading = document.getElementById(".loading");
const iframe = document.querySelector(".player-crop iframe");

let iframeLoaded = false;

iframe.addEventListener("load", () => {
  iframeLoaded = true;

  setTimeout(() => {
    hideLoading();
  }, 2000);
});

function hideLoading() {
  loading.style.transition = "opacity .5s ease";
  loading.style.opacity = "0";

  setTimeout(() => {
    loading.style.display = "none";
    document.body.classList.remove("overflow-hidden");
  }, 500);
}
