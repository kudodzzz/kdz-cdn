window.addEventListener('load', () => {
    setTimeout(() => {
        const loader = document.getElementById('loading');
        if (loader) {
            loader.style.opacity = '0';
            setTimeout(() => {
                loader.style.display = 'none';
            }, 500);
        }
    }, 1500);
});