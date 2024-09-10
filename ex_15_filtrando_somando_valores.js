/*15. Filtrando e Somando Valores
- Objetivo: Crie um array de objetos transacoes, onde cada transação tem
tipo (entrada ou saída) e valor. Use forEach para calcular o saldo final,
somando as entradas e subtraindo as saídas.*/

const Transactions = [
    { type: 'input', value: 100 },
    { type: 'exit', value: 50 },
    { type: 'input', value: 200 },
    { type: 'exit', value: 75 }
];

let finalBalance = 0;

Transactions.forEach(transaction => {
    if (transaction.type === 'input') {
        finalBalance += transaction.value;
    } else if (transaction.type === 'exit') {
        finalBalance -= transaction.value;
    }
});

console.log(`Final balance: R$${finalBalance}`);