/*2. Verificando Propriedades
 - Objetivo: Crie um objeto livro com propriedades titulo, autor,
anoPublicacao e genero. Verifique se a propriedade editora existe no
objeto usando for in. Se não existir, adicione essa propriedade ao objeto.*/

const bookObject = {
    title: "1889",
    author: "Laurentino Gomes",
    publicationYear: "2013",  
    genre: "History of Brazil"
}

let publisherExists = false;

for(let property in bookObject){
    if(property === "publisher"){
        publisherExists = true;
        break; //Se encontrar a propriedade, pode sair do loop.
    }
}

if(!publisherExists){
    bookObject.publisher = "Globo Livros"; //Adiciona a propriedade se não existir.
}

console.log(bookObject);