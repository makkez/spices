document.getElementById('header-burger').onclick = function () {
    let hBurgerElem = document.getElementById('header-burger');
    if (hBurgerElem) { hBurgerElem.classList.toggle('active'); }

    let burgerMenuElem = document.getElementById('burger-menu');
    if (burgerMenuElem) { burgerMenuElem.classList.toggle('active'); }

    let bodyElem = document.getElementById('body');
    if (bodyElem) { bodyElem.classList.toggle('lock'); }
}