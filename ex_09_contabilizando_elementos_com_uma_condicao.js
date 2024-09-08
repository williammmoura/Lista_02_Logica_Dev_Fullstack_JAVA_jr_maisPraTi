/*9. Contabilizando Elementos com uma Condição
- Objetivo: Crie um array de objetos clientes, cada um com propriedades
nome, idade, e cidade. Use "forEach" para contar quantos clientes têm mais
de 30 anos*/

const customersArrayOfObjects = [
    {
        name: "William",
        age: 32,
        city: "Florianópolis"
    },
    {
        name: "Caroline",
        age: 31,
        city: "Florianópolis"
    },
    {
        name: "Maggie",
        age: 12,
        city: "Florianópolis"
    }
];

console.log('Customers over 30 years old.');

customersArrayOfObjects.forEach(customers => {
    if(customers.age > 30){
        console.log(`Name: ${customers.name}`);
    }
})