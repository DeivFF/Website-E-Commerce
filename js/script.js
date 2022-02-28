/*let aside = document.querySelector("aside");
const menu = document.querySelector("#menu-btn");

function aparecerMenu(){
    aside.classList.toggle('active');
}

menu.addEventListener("onclick", aparecerMenu)

*/
/** ADICIONAR CLASS */
const aside = document.querySelector("aside");

const menu = document.querySelector("#menu-btn");
menu.onclick = () => {
    aside.classList.toggle('active')
}

/** REMOVER CLASS */
const fechar = document.querySelector("#fechar");

fechar.onclick = () => {
    aside.classList.remove('active')
}

const search = document.querySelector('#search-icon')
const formActive = document.querySelector('.formulario')

search.onclick = () => {
    formActive.classList.toggle('active')
}