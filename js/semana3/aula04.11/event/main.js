
let blocoDiv = document.querySelector('div');
function mudarCor() {
    blocoDiv.style.backgroundColor = '#ffccdf';
    blocoDiv.style.border = '2px solid #a7190f';
}



function mudarNome() {

 let titulo = document.querySelector('h1');
    if (titulo.innerHTML === 'Olá, Aluna') {
        titulo.textContent = 'Olá, sol';
    } else {
        titulo.textContent = 'Olá, Aluna';
    }

}


