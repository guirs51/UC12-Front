const btn = document.getElementById('btn');

const h2 = document.getElementById('h2');

/* 
    quando eu clicar no botão, eu troco a classe do h2
*/

btn.addEventListener('click', () => {
    h2.classList.toggle('ativo');
})