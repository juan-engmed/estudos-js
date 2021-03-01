//Declarações conjuntas Assignments

let age, isHuman;

age = 12;
isHuman = true; 

console.log(age, isHuman);

//Multiplos argumentos na função
//Template Literals -> interpolando funções

console.log(`Juan tem ${age} como humano é ${isHuman}`)

//Object

const person = {
    name: "Juan",
    age: 29,
    isAdmin: true,
}

console.log(`${person.name} tem ${person.age} anos`);
//Arrays 

const animals = [
    'Lion',
    'Monkey'
    ]
    
    //acessar valores dentro do array
    console.log(animals[0]);

    //Exercícios

    //Declare um varíavel de nome weight

    let weight

    //Declare uma variável e atribua valores para um cada um dos dados:
    //string
    let name ="Juan";
    //age -> number - integer
    let idade = 29;
    //stars -> number -> float
    let stars = 5403.5;
    //isSubscribed: Boolean
    let isSubscribed = true;
    //Declare um objeto estudante e imprima suas propriedades

    let student = {
        name: "Juan",
        age: 29,
        course: "IoT"

    }

    console.log(`Aluno se chama ${student.name}, tem ${student.age} anos`);

    //Crie um array com objetos

    let students = [
        student,
        total = 60
    ];

    console.log(students[0]);