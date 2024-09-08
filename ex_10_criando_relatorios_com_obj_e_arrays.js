/*10. Criando Relatórios com Objetos e Arrays
- Objetivo: Crie um array de objetos vendas, onde cada objeto tem produto,
quantidade e valor. Use "forEach" para calcular o valor total de vendas de
todos os produtos*/

const salesArrayOfObjects = [
    {
        product: "PlayStation 5",
        quantity: 10,
        price: 4550
    },
    {
        product: "Xbox series X",
        quantity: 15,
        price: 4150
    },
    {
        product: "PS5 controller",
        quantity: 20,
        price: 280
    },
    {
        product: "Xbox controller",
        quantity: 20,
        price: 200
    }
];

let totalSales = 0;

salesArrayOfObjects.forEach(sales => {
    totalSales += sales.quantity * sales.price;
})

console.log(`The total sales value is: R$ ${totalSales}`);