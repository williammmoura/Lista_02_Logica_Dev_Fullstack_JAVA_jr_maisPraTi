/*8. Criando Novos Arrays a Partir de Objetos
- Objetivo: Crie um array de objetos filmes, onde cada filme tem titulo,
diretor, e anoLancamento. Use forEach para criar um novo array
contendo apenas os títulos dos filmes.*/

const moviesArrayofObjects = [
    {
        title: "Interstellar",
        director: "Christopher Nolan",
        releaseYear: 2014
    },
    {
        title: "Shrek 2",
        director: "Andrew Adamson",
        releaseYear: 2004
    },
    {
        title: "Joker",
        director: "Todd Phillips",
        releaseYear: 2019
    }
];

const movieTitle = [];

moviesArrayofObjects.forEach(movie => {
    movieTitle.push(movie.title)
})

console.log(movieTitle);