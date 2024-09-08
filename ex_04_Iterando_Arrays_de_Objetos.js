/*4. Iterando Sobre Arrays de Objetos
- Objetivo: Crie um array de objetos pessoas, onde cada objeto representa
uma pessoa com nome, idade, e cidade. Use for of para exibir as
informações de cada pessoa no console.*/

const peopleArrayObjects = [
    {
        name: "William",
        age: "32",
        city: "Florianópolis"
    },
    {
        name: "Caroline",
        age: "31",
        city: "Florianópolis"
    },
    {
        name: "Andressa",
        age: "22",
        city: "Santa Maria"
    }
]

//Em cada iteração, a variável "information" recebe um objeto (neste caso, uma pessoa).
for(let person of peopleArrayObjects){
    console.log(`Name: ${person.name}, Age: ${person.age}, City: ${person.city}`);
}