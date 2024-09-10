/*11. Agrupando Elementos com forEach
- Objetivo: Crie um array de objetos pedidos, onde cada pedido tem
cliente, produto, e quantidade. Use "forEach" para criar um objeto que
agrupa a quantidade total de produtos por cliente.
*/

const requestsArrayOfObjects = [
    {
        customer: "William",
        product: "SF22 - 1:43 - Burago",
        quantity: 2
    },
    {
        customer: "Caroline",
        product: "Perfume Benetton",
        quantity: 1
    },
    {
        customer: "Maggie",
        product: "Ração Prime Sênior",
        quantity: 3
    }
];

let totalRequestsByCustomer = {};


requestsArrayOfObjects.forEach(request => {
    // Verifica se o cliente já existe no objeto, se não, inicia com 0
    if (!totalRequestsByCustomer[request.customer]) {
        totalRequestsByCustomer[request.customer] = 0;
    }
    // Soma a quantidade de produtos para cada cliente
    totalRequestsByCustomer[request.customer] += request.quantity;
});

console.log(totalRequestsByCustomer);