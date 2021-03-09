//Control Flow

//if...else

let temperature = 36.5;

if( temperature >=37){
    console.log('Febre')
}
else{
    console.log('Saudável');
}

//Múltiplas condicionais (podem haver quantas forem necessárias) // Transforme as condicionais em variáveis
let highTemperature = 37.5;
let mediumTemperature = temperature < 37.5 && temperature >= 37;

if(highTemperature){
    console.log('Febre')
}else if(mediumTemperature){
    console.log('Febre Moderada');
}else{
    console.log('Saudável')
}

//SWITCH

//Ex: Calculadora

function calculate(number1, operator, number2){
    let result = 0;

    switch (operator) {
        case '+': 
            result = number1 + number2
            
            break;

            case '-': 
            result = number1 + number2
            
            break;
    
        default:
            break;
    }

    return result;
}

console.log(calculate(1, '+', 2));

//THROW e TRY/CATCH
//-> Ideia lançar um bloco de código (THROW), tentar rodar (try) e se der erro capturar(catch) este erro

function sayMyName(name =''){

    if(name === ''){
        throw 'Nome é obrigatório';
    }
    console.log('depois do erro');
}

//try catch
try{
    sayMyName()
} catch(e){
    console.log(e);
}
