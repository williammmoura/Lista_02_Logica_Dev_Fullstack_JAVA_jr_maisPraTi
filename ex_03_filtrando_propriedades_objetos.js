/*3. Filtrando Propriedades de Objetos
- Objetivo: Dado um objeto produto com várias propriedades, crie uma
função que retorna um novo objeto contendo apenas as propriedades cujo
valor seja maior que um valor específico. Use for in para filtrar as
propriedades*/

const productObject = {
    color: "black",
    gpu: "rtx4070",
    processor: "intel core i-9",
    RAMmemory: "16Gb"
}

// Função que cria um novo objeto filtrado
const newObjectFunction = () => {
    let filteredObject = {};// Objeto vazio

    // Usando 'for...in' para iterar sobre cada propriedade do objeto original
    for(let key in productObject){
        // Verificando se o valor da propriedade tem mais de 5 caracteres
        if(productObject[key].length > 5){
            // Adicionando a propriedade ao novo objeto se a condição for atendida
            filteredObject[key] = productObject[key]
        }
    }

    // Retornando o novo objeto filtrado
    return filteredObject;
}

const result = newObjectFunction();

console.log(result);