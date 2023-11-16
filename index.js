function scrollUp() {
    const scrollUP = document.getElementById('scroll-arriba');
    if(this.scrollY >= 460) scrollUP.classList.add('mostrar-scroll');
    else scrollUP.classList.remove('mostrar-scroll')
}

window.addEventListener('scroll', scrollUp)



