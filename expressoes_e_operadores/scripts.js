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