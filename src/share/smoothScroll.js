function smoothScroll(target) {
    const targetElement = document.querySelector(target);
    const offsetTop = targetElement.offsetTop;
    window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
    });
}

export default smoothScroll;
