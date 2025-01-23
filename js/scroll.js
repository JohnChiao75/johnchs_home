function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

document.getElementById('back-to-top').addEventListener('click', scrollToTop);