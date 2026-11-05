let titulo = document.getElementById('name');
titulo.textContent = "Sol Guilloux Mazzarolo"

let paragrafos = document.getElementsByClassName('paragrafo');


for (let num = 0; num < paragrafos.length; num++){
paragrafos[num].style.color = "#6b018b"
}

let itemLista = document.getElementsByTagName('dt')[1];
itemLista.style.backgroundColor = "#a84474bb"