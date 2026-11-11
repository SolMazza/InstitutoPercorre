let quadrados = ['□', '□', ' □', ' □'];

let circulos = quadrados.map(() => {
    return '●';
})

circulos.forEach((circulo) => {
    console.log(`${circulo}`);

})

let idades = [11, 20, 30, 23, 13, 80, 54];

let menorIdade = idades.filter((idade) => {
    return idade < 18;
})

console.log(menorIdade);

let maiorIdade = idades.filter((idade) => {
    return idade > 18;
})

console.log(maiorIdade);
