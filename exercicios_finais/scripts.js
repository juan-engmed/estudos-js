/* Crie um Algoritmo que transforme as notas do sistema número, para sistema de notas em caracteres tipo A, B e C.

* 90+  -> A

80-89  -> B

70-79 -> C

60-69 -> D
menos que 60 - F

*/


const getScore = (score) => {

let scoreA = score >= 90 && score <= 100;
let scoreB = score < 90 && score >= 80;
let scoreC = score < 80  && score >=70;
let scoreD = score < 70  && score >=60;
let scoreF = score < 60 && score >= 0;

let scoreFinal;


if (scoreA){

    scoreFinal = 'A'

} else if(scoreB) {
    scoreFinal = 'B'
}else if(scoreC) {
    scoreFinal = 'C'
}else if(scoreD) {
    scoreFinal = 'D'
}else if(scoreF) {
    scoreFinal = 'F'
} else{
    scoreFinal = 'nota inválida';
}

return scoreFinal;

}

console.log(getScore(-101));
console.log(getScore(1));
console.log(getScore(2));
console.log(getScore(40));
console.log(getScore(99));
console.log(getScore(89));

/* Crie um objeto que possuirá 2 propriedades, ambas do tipo array
*receitas:[]
*despesa: []

Agora crie uma função que irá calcular o total de receitas e despesas e irá mostrar uma mensagem se a familía está com saldo
positivo ou negativo, seguido do valor do saldo
*/

let family = {
    incomes: [2500, 3000, 200],
    expenses: [1500, 300]
}

const sum = (array) => {

    let total = 0;
    
    for(let value of array){
        total += value;
    }
    
    
    return total;
}

const calculateBalance = (total) => {

    
    const calculateIncomes = sum(family.incomes);
    const calculateExpenses = sum(family.expenses);

    const balance = calculateIncomes - calculateExpenses;

   

    if(balance < 0){
        console.log(`Saldo Negativo e a família possuir ${balance} reais`);
    } else if(balance > 0){
        console.log(`Saldo Positivo e a família possuir ${balance.toFixed(2)} reais`);
    }else{
        console.log('Balanço Zerado')
    }


}

calculateBalance();


/* Buscando e contado dados em Arrays

Baseado no Array de Livros por Categoria abaixo, faça os seguintes desafios

*Contar o número de categorias e o número de livros em cada categoria
*Contar o número de autores
*Montar livros do autor Augusto Cury
*Transformar a função acima em uma função que irá receber o nome do autor e devolver
os livros deste autor
*/

const booksByCategory = [
    {
        category: "Riqueza",
        books: [
            {
                title: 'Os segredos da mente milionário',
                author: 'T. Harv Eker',
            },
            {
                title: 'O homem mais rico da Babilônia',
                author:'George S. Clason',
            },
            {
                title: 'Pai Rico, Pai Pobre',
                author: 'Rober T. Kiyosaki e Sharon L. Lechter'
            },
        ],
    },

    {
        category: 'Inteligência Emocional',
        books: [
            {
                title: 'Você é insubstituível',
                author: 'Augusto Cury',
            },
            {
                title: 'Ansiedade - Como Enfrentar o Mal do século',
                author: 'Augusto Cury',
            },
            {
                title: 'Os 7 Hábitos das pessoas Altamente eficazes',
                author: 'Stephen R. Covey',
            },
        ],
    },
];

//número de categorias
const totalCategories = booksByCategory.length;

//número de livros em cada categoria, ele transforma cada elemento de BooksByCategory numa variável chamada Busca
for(let busca of booksByCategory){
    console.log(`Total de Livros da categoria ${busca.category} é ${busca.books.length}.`);
    
}

/*Transformar a função acima em uma função que irá receber o nome do autor e devolver
os livros deste autor
*/




//
const countAuthors = () => {
    let authors = [];

    for(let busca of booksByCategory){
        for(let book of busca.books){
            //se esta expressão retornar -1 significa que não há autor dentro da variável let authors
            //se não achar, ele irá colocar no array authors
            if(authors.indexOf(book.author) == -1){
                authors.push(book.author)
            }
        }
    }

    console.log(`Total de autores: ${authors.length}`);

}
countAuthors();

const booksOfAuthor = (author) => {
    let books = [];

    for(let busca of booksByCategory){
        for(let book of busca.books){
            
            if(book.author === author){
                books.push(book.title)
            }
        }
    }

    console.log(`Livros do ${author}: ${books.join(", ")}`);

}

booksOfAuthor('Augusto Cury');