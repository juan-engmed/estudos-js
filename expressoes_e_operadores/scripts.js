/*
Expressões e Operadores

Operators (Binary /Unary / Ternary)

Binary → (number + 1) → + está entre dois

Unary → (++number) / (typeof number) / (—number) → apenas um valor recebendo um tipo de operador

Ternary → (true ? 'alo' : 'nada') */

// Operador unary → delete → deletar propriedade de um objeto

const person = {
    name: 'Juan',
    age: 25,
}

delete person.age;


//Expression new → left-hand-side expression → criar um novo objeto

let name = new String('Juan');

let age = new Number(23);

let date = new Date('2020-12-01');

//Operadores de Atribuição (Assignment)

let k = 1

k += 2; // k = k + 1
k -= 2;
k *= 2;
k /= 2;
k %= 2;
k **= 2;

// Operadores de Comparação

let pao = true;
let queijo = true;

//&& Ambos tem quer true para dar true
// || or ambos true, um ou true. Se ambos forem false, dará false
// ! negação !pao = false

// Operador Condicional Ternário
// Dependendo da condição nós receberemos diferentes
// Condition ? value1 : value2

//True cai na primeira, se não cai na segunda ( Primeira : Segunda )

let driverAge = 16;

const canDrive = age >= 18 ? 'can drive' : "can't drive"


//Operadores para String concatetion (=)
let alpha = 'alpha'
console.log(alpha + 'bet' + 's'); //alphabets

//atualizar string
alpha += 'bet' // alphabet

//Falsy e Truthy
// Quando um valor é considerado false em contextos onde um booleano é obrigatório (condicionais e loops
//JS transforma valores em tipo false

false, 0, -0, "", null, undefined, NaN;

//Truthy
true; {}, [], 1, 3.23, "0", "false", -1, Infinity, -Infinity;

//Operators precedence
( ), *, ++, --, *, /, +, - < <=, >, >=, ==, !=, ===, !==, &&, ||, ?:, =, +=, -=, *=
console.log(2 + 5 * 10

//Caso especial
console.log(3 > 2 > 1) é false pois 3 > 2 = true e true == 1, não é maior,
então console.log( 3 > 2 && 2 > 1) = true;