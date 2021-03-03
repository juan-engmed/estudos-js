const { ENGINE_METHOD_CIPHERS } = require("constants");

console.log('9' + 5); // 95 (Type Coersion)

console.log(Number(('9') + 5));

//Transformar string em Número e vice versa

let string = '123';
console.log(Number(string));

let number = 321;
console.log(String(number));

//Manipulando Strings e Números
//Contar quatos caracteres tem uma palavra e quantos dígitos tem um número

let word = "Paralelepípedo";
console.log(word.length);

let number2 = 1234;
console.log(String(number2).length); //lenght só funciona para string

//Transformar um número quebrado com 2 casa decimais, trocar pronto por vírgula
let number3 = 1312.23213;

console.log(number3.toFixed(2).replace(".",",")); //1312,23

//Transformar letras minúsculas em maiúsculas.

let word2 = "Programar é maravilhoso";
console.log(word2.toUpperCase()); //PROGRAMAR É MARAVILHOSO
console.log(word2.toLowerCase()); //programar é maravilhoso
console.log(word2.toLowerCase().toUpperCase()); //cadeia de métodos

//Verificar se o texto contém a palavra Amor
let phrase = "Eu quero viver";
console.log(phrase.includes('Amor'));//False
let phrase2 = "O amor é belo"
console.log(phrase.includes('Amor'));//False pois é case sensitive

let phrase3 = "Eu quero viver o amor!";
let myArray = phrase.split(" "); // 

console.log(myArray);

//concatenar os elementos -> .join("insiraODivisor")
let phraseConcatenate = myArray.join("_");
console.log(phraseConcatenate); //Eu_quero_viver

//Criar Array com constructor

let myArrayConstructor = new Array('a','b','c'); //
console.log(myArrayConstructor); // (3) ["a", "b", "c"]

//Transformar cada letra da string em array
let word4 = "Beleza";
console.log(Array.from(word4)); //(6) ["B", "e", "l", "e", "z", "a"]

//Manipulando Arrays
//Adicionar item ao final -> push

let techs = ['html', 'css', 'js'];
techs.push('node');
console.log(techs);

//Adicionar itens no início -> unshift
let techs2 = ['html', 'css', 'js'];
techs.unshift('node');
console.log(techs);


//Pegar somente alguns elementos do array → slice()
let techs3 = ['html', 'css', 'js'];
console.log(techs3.slice(1,3)); //["css","js"] //começou do 1->css e vai até o 3->js
//o 1ºconta como array (0,1,2...) 
//o 2º número conta normal (1,2,3)

//Remover 1 ou mais items em qualquer posição do array → splice()
let techs4 = ['html', 'css', 'js'];
techs4.splice(1,1)//tirar só o elemento //["html","js"]

techs4.splice(1,2)// ["html"]

techs4.splice(1,3)//["html"], pois começa do elemento 1->css e vai removendo ele pra frente

//Encontrar a posição (index) de um elemento no array → let = index (ÓTIMA ESTRATÉGIA para buscar e remover)
let index = techs5.indexOf('css');
//Assim encontraremos o index do elemento css e podemores manipula-lo 
//Removendo:
techs.splice(index, 1);
