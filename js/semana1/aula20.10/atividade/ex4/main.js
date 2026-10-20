
// let media = 8;

// if (media >= 7) {
//     console.log('aprovada');
// } else if (media >= 6) {
//     console.log('ap. conselho');

// } else{
//     console.log('aluna reprovada')
// }

//exercicio 4
    

let altura = parseFloat(prompt("digite sua altura: (ex: 1.50)"));
let peso = parseFloat(prompt("digite seu peso: (ex: 50.0)"));
let imc = peso / (altura * altura);
 console.log(`${imc}`);
if( imc >= 18.5 &&  imc <= 24.9 ){
    console.log(`seu imc é de: ${imc}, saúdevel`);
}
