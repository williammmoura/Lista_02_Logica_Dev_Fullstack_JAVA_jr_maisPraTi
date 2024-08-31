/*. Acessando Propriedades de Objetos
- Objetivo: Crie um objeto carro com propriedades como marca, modelo,
ano, e cor. Use for in para iterar sobre as propriedades e exibir seus
valores no console*/

const carObject = {
    make: "Ferrari",
    model: "SF-24",
    year: "2024",
    color: "red"
}

/* - Primeira iteração: A variável propriedade assume o valor "marca".
 - Segunda iteração: A variável propriedade assume o valor "modelo".
 - Terceira iteração: A variável propriedade assume o valor "ano".
 -Quarta iteração: A variável propriedade assume o valor "cor".*/

for(let property in carObject){
    /*Dentro do loop é acessado o valor de cada propriedade do objeto usando a notação de colchetes "objeto[propriedade]".*/
    console.log(`${property}: ${carObject[property]}`);
}