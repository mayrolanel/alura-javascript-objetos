const antesDeMoria = {
    nome: 'Gandalf, o Cinzento',
    classe: 'mago',
    nivel: "20"
};

const depoisDeMoria = Object.create(antesDeMoria);

depoisDeMoria.nome = 'Gandalf, o Branco';

console.log(antesDeMoria); 

console.log(depoisDeMoria.classe); 
console.log(depoisDeMoria.nivel); 
console.log(depoisDeMoria); 