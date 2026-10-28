let jogos = ['BF4', 'Class Of Clans', 'TwinShot', 'Rainbow Sex'];
console.log(jogos[0], jogos[2]);


let bidemencionalJogos = [
    ['Battlefield 4', 'Rainbow Six', 'CyberPunk'],
    ['Pokémon Go', 'Class Of Clans', 'Subway Surf'],
    ['The Sims', 'FireBoy and WaterGirl', 'TwinShot']
];

console.log(bidemencionalJogos[1][2]);

let jogoDeTiro = bidemencionalJogos[0][0];
let jogoDeCelular = bidemencionalJogos[1][0];

bidemencionalJogos[0][2] = 'CSGO';

console.log(bidemencionalJogos[0][2]);