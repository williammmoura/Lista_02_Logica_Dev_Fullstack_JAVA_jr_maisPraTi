/*7. Modificando Objetos em um Array
- Objetivo: Crie um array de objetos produtos, onde cada objeto tem nome,
preco, e desconto. Use forEach para aplicar um desconto de 10% em todos
os produtos e exibir o novo preço.*/

const productsArrayofObject = [
    {
        name: "PlayStation 5",
        price: 3850,
        discount: 5
    },
    {
        name: "Dell G15",
        price: 5258,
        discount: 5
    },
    {
        name: "Xbox Controller",
        price: 250,
        discount: 0
    }
];

productsArrayofObject.forEach(product => {
    //Aplica o desconto de 10%
    product.price = product.price - (product.price * 0.1);

    console.log(`${product.name} - New price R$${product.price.toFixed(2)}`);
})
