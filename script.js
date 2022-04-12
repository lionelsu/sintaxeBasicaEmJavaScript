// tipos primitivos

// boolean
var vOuF = false;
console.log(typeof(vOuF));
 
// number
var numeroQualquer = 1;
console.log (typeof(numeroQualquer));

// string
var nome = 'lionel';
console.log(typeof(nome));

// function
var funcao = function () {}
console.log(typeof(funcao));

// como declarar
var variavel = 'lionel';
variavel = 'miranda';
console.log(variavel);

let variavel2 = 'lionel';
variavel2 = 'miranda1';
console.log(variavel2);

const constante = 'lionel';
console.log(constante);

// escopo Global e Local
var escopoGlobal = 'global';
console.log(escopoGlobal);

function escopoLocal() {
    let escopoLocalInterno = 'local';
}

escopoLocal();

// atribuição
var atribuicao = 'lionel';

// comparação
var comparacao = '0' == 0;
console.log(comparacao);

// comparação identica
var comparacaoIdentica = '0' === 0;
console.log(comparacaoIdentica);

// adição
var adicao = 1 + 1;
console.log(adicao);

// subtração
var subtracao = 4 - 2;
console.log(subtracao);

// multiplicação
var multiplicacao = 5 * 3;
console.log(multiplicacao);

// divisão real
var divisaoReal = 6 / 2;
console.log(divisaoReal);

// divisão inteira
var divisaoInteira = 5 % 2;
console.log(divisaoInteira);

// potenciação
var potenciacao = 2 ** 10;
console.log(potenciacao);

// maior que
var maiorQue = 5 > 2;
console.log(maiorQue);

// menor que
var menorQue = 5 < 2;
console.log(menorQue);

// maior ou igual a
var maiorOuIgual = 5 >= 2;
console.log(maiorOuIgual);

// menor ou igual a
var menorOuIgual = 5 <= 2;
console.log(menorOuIgual);

// operador "E"
var e = true && true;
console.log(e);

// operador "OU"
var ou = true || false;
console.log(ou);

// operador "NÃO"
var nao = !true;
console.log(nao);