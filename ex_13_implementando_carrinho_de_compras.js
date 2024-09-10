/*13. Implementando um Carrinho de Compras
- Objetivo: Crie um objeto carrinho com uma propriedade itens, que é um
array de objetos. Cada objeto dentro de itens deve representar um
produto no carrinho, com nome, quantidade, e precoUnitario. Use forEach
para calcular o valor total do carrinho*/

const shoppingCart = {
    itens: [
        {
            name: "Parafusadeira/furadeira Impacto Vonder Pfv074 12v 74 Peças",
            quantity: 1,
            unitPrice: 354.35
        },
        {
            name: "Prateleira big aparador pinus mltiuso cor madeira AJL",
            quantity: 1,
            unitPrice: 135
        },
    ]
};

let totalCartPrice = 0;

shoppingCart.itens.forEach(item => {
    //Soma do preço total do carrinho de compras
    totalCartPrice += item.quantity * item.unitPrice;
});

console.log(`Total cart price: R$${totalCartPrice}`);