let tccGroup = ["Geofrey", "Sol", "Luíza", "Verônica", "Alana"];
console.log(tccGroup[3]);

let tcc2 = new Array('Brenda', 'edu', 'Agnes', 'fortuda');

let frutasExoticas = ['Pitaya', 'guarana', 'ingá', 'lichia', 'Romã', 'Tamarillo'];

let turma2 = [
['Verônica', 'Luíza', 'Sol'],
['Alana', 'Geofrey', 'Agnes'],
['Edu', 'Brayan', 'Theo']
];

// Conversão de Array

let numeros = [1, 2, 3, 4];

console.log(numeros);

// ToString Para converter para string
let numerosToString = numeros.toString();

console.log(numerosToString, typeof numerosToString);

// Join Para converter para string e acrescenta algo entre os elementos
let numerosJoin = numeros.join(" - ");

console.log(numerosJoin);



let nomes = new Array('Brenda', 'edu', 'Agnes', 'fortuda');
console.log(nomes);

// pop() remove o último elemento do array
let nomeUltimo = nomes.pop(); //aqui removemos da lista e colocamos em uma varialvel
console.log(nomes, nomeUltimo);

// push() insere um elemento no final do array e retorna o tamanho do novo array
nomes.push(nomeUltimo); 
console.log(nomes);

// shift() remove o elemento no início do array deslocando todos os elementos em uma posição
let nomeRemovido = nomes.shift();
console.log(nomes);

// unshift() insere um elemento no início do array
nomes.unshift(nomeRemovido);
console.log(nomes);

// O comando delete apaga um elemento na posição desejada e altera para slot vazio
delete nomes[0];
console.log(nomeDeletado, nomes);
