document.getElementById('catalog-dropdown-link').onclick = function () {
    let hCatalogDropdownLinkElem = document.getElementById('catalog-dropdown-link');
    if (hCatalogDropdownLinkElem) { hCatalogDropdownLinkElem.classList.toggle('active'); }

    let catalogDroppdownElem = document.getElementById('catalog-dropdown');
    if (catalogDroppdownElem) { catalogDroppdownElem.classList.toggle('active'); }

    let bodyElem = document.getElementById('body');
    if (bodyElem) { bodyElem.classList.toggle('lock'); }
}