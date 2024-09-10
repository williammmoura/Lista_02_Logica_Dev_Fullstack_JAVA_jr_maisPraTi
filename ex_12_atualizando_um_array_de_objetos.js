/*12. Atualizando um Array de Objetos
- Objetivo: Crie um array de objetos estoque, onde cada objeto tem
produto, quantidade e minimo. Use "forEach" para atualizar a quantidade
dos produtos que estão abaixo do mínimo, duplicando suas quantidades.*/

const stockArrayOfObjects = [
    {
        product: "SF22 - 1:43 - Burago",
        quantity: 2,
        minimum: 3
    },
    {
        product: "Perfuma Benetton",
        quantity: 3,
        minimum: 3
    },
    {
        product: "Ração Prime Sênior",
        quantity: 10,
        minimum: 3
    }
];

// Atualiza as quantidades dos produtos que estão abaixo do mínimo
stockArrayOfObjects.forEach(stock => {
    if(stock.quantity < stock.minimum){
        stock.quantity *= 2;
    }
})

console.log(stockArrayOfObjects);