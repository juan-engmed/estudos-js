//declaração -> function statement
function createPhrases() {
console.log("Olá Juan")
console.log("Vamos Programar")
}

//execute, run, call, invoke
createPhrases();

//function expression (anonymous)
//parâmetros (parameters)
const sum = function(number1, number2) {
    

    total = number1 + number2;
    return total;

}

console.log(sum(2,3)); //arguments - argumentos


//Arrow function

const sayMyNames = () => {
    console.log9("Juan");
}

//Arrow function com um argumento apenas
const sayMyName = name => console.log(name);

sayMyName('Juan');

//Function Constructor
function Person(name) {
    this.name = name;
    this.walk = function(){
        return this.name + "esta andando"
    }
}

const juan = new Person("Juan");
console.log(juan);