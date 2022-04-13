// o que são vetores ou arrays

// como declarar um arrey
let arrayY = ['string', 1, true];
console.log(arrayY);

// o array pode guardar vários tipos de dados
let arrayYY = ['string', 1, true, ['array1'], ['array2'], ['array3'], ['array4']];
console.log(arrayYY);

// forEach
arrayY.forEach(function(item, index){console.log(item, index)});

// Push
arrayY.push('1');
console.log(arrayY);

// Pop
arrayY.pop();
console.log(arrayY);

// Shift
arrayY.shift();
console.log(arrayY);

// Unshift
arrayY.unshift('novo item no inicio');
console.log(arrayY);

// IndexOf 
console.log(arrayY.indexOf(true));

// Splice
arrayY.splice(0, 3);
console.log(arrayY);

// Slice
let novoArray = arrayY.slice(0, 3);
console.log(novoArray); 

// Objetos
let object = { string: 'string', number: 1, boolean: true, array: ["array"], objectInterno: { 'objeto interno'}};
console.log(object);

/// Esta aula usa muitas palavras reservadas. Impediu um pouco a continuidade do conteúdo.