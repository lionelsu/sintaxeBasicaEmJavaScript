var jogador1 = 0;
var jogador2 = 0;
var placar;



if (jogador1 > 0) {
        console.log('Jogador 1 marcou ponto!');
} else if (jogador2 > 0) {
        console.log('Jogador 2 marcou ponto');
} else {
        console.log('Ninguém marcou ponto');
}

// switch
switch (placar) {
    case placar = jogador1 > jogador2:
        console.log('jogador1 ganhou');
        break;
        case placar = jogador2 > jogador1:
            consple.log('jogador2 ganhou');
            break
            default:
                console.log('ninguém ganhou');
}

// for
let matriz = ['valor1', 'valor2', 'valor3', 'valor4', 'valor5',];
let object = { propriedade1: 'valor1', propriedade2: 'valor2', propridade3: 'valor3',}

for (let indice = 0; indice < matriz.length; indice++) {
    console.log(indice);
}

// for/in
for (let i in matriz) {
    console.log(i);
}

// com object
for (i in object) {
    console.log(i);
}

// for of
for (i of matriz) {
    console.log(i);
}

// while
var a = 0;
while (a < 10) {
    a++;
    console.log(a);
}

// do while
do {
    a++;
    console.log(a);
} while (a < 10);