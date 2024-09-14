# Lista de Exercícios - Lógica de Programação (Módulo 1)

Esta lista de exercícios foi criada para ajudar no desenvolvimento de habilidades em lógica de programação utilizando JavaScript.
Cada exercício foca em diferentes conceitos e técnicas, proporcionando uma prática em programação.

## Objetivos dos Exercícios

- **Acessar e manipular propriedades de objetos**: Trabalhar com objetos e iterar sobre suas propriedades.
- **Verificar e adicionar propriedades**: Verificar a existência de propriedades em objetos e adicionar novas se necessário.
- **Filtrar e modificar dados**: Filtrar e modificar propriedades e valores em objetos e arrays.
- **Iterar sobre arrays de objetos**: Utilizar diferentes loops para iterar e manipular arrays de objetos.
- **Calcular e reportar valores**: Realizar cálculos com base em dados e gerar resultados a partir de arrays de objetos.

## Exercícios e Explicações

### 1. Acessando Propriedades de Objetos
**Objetivo:** Criar um objeto `carro` e usar `for in` para iterar sobre suas propriedades, exibindo cada valor.  
**Comentário:** O código define um objeto `carObject` com várias propriedades e utiliza o loop `for in` para acessar e exibir cada propriedade e seu valor.

### 2. Verificando Propriedades
**Objetivo:** Criar um objeto `livro`, verificar a existência da propriedade `editora`, e adicionar se não estiver presente.  
**Comentário:** O código verifica se a propriedade `publisher` está no objeto `bookObject`. Se não estiver, a propriedade é adicionada com um valor padrão.

### 3. Filtrando Propriedades de Objetos
**Objetivo:** Dado um objeto `produto`, criar uma função para retornar um novo objeto com propriedades cujos valores tenham mais de 5 caracteres.  
**Comentário:** O código define uma função que cria um novo objeto contendo apenas as propriedades do `productObject` com valores maiores que 5 caracteres.

### 4. Iterando Sobre Arrays de Objetos
**Objetivo:** Criar um array de objetos `pessoas` e usar `for of` para exibir as informações de cada pessoa.  
**Comentário:** O código usa `for of` para iterar sobre um array de pessoas, exibindo o nome, idade e cidade de cada uma.

### 5. Calculando Valores em Arrays de Objetos
**Objetivo:** Criar um array de objetos `alunos`, calcular a média das notas de cada aluno e exibir o nome junto com a média.  
**Comentário:** O código calcula a média das notas de cada aluno no array e imprime o resultado junto com o nome do aluno.

### 6. Filtrando Arrays de Objetos
**Objetivo:** Criar um array de objetos `funcionarios` e usar `for of` para exibir funcionários com salários acima de um valor específico.  
**Comentário:** O código filtra e exibe funcionários com salários superiores a um determinado limite, usando o loop `for of`.

### 7. Modificando Objetos em um Array
**Objetivo:** Criar um array de objetos `produtos`, aplicar um desconto de 10% em cada produto e exibir o novo preço.  
**Comentário:** O código usa `forEach` para aplicar um desconto de 10% em todos os preços dos produtos no array e exibe o novo preço.

### 8. Criando Novos Arrays a Partir de Objetos
**Objetivo:** Criar um array de objetos `filmes` e usar `forEach` para criar um novo array com apenas os títulos dos filmes.  
**Comentário:** O código utiliza `forEach` para extrair e armazenar os títulos dos filmes em um novo array.

### 9. Contabilizando Elementos com uma Condição
**Objetivo:** Criar um array de objetos `clientes` e contar quantos têm mais de 30 anos.  
**Comentário:** O código conta e exibe os nomes dos clientes cuja idade é superior a 30 anos, usando `forEach`.

### 10. Criando Relatórios com Objetos e Arrays
**Objetivo:** Criar um array de objetos `vendas` e calcular o valor total das vendas.  
**Comentário:** O código calcula o valor total das vendas multiplicando a quantidade de produtos pelo preço e somando todos os valores.

### 11. Agrupando Elementos com `forEach`
**Objetivo:** Criar um array de objetos `pedidos` e usar `forEach` para agrupar a quantidade total de produtos por cliente.  
**Comentário:** O código agrupa e soma a quantidade de produtos comprados por cada cliente usando um objeto para armazenar as quantidades totais.

### 12. Atualizando um Array de Objetos
**Objetivo:** Criar um array de objetos `estoque`, e atualizar a quantidade dos produtos abaixo do mínimo, duplicando suas quantidades.  
**Comentário:** O código verifica e atualiza a quantidade dos produtos que estão abaixo do nível mínimo definido, dobrando sua quantidade.

### 13. Implementando um Carrinho de Compras
**Objetivo:** Criar um objeto `carrinho` com uma lista de itens e calcular o valor total do carrinho.  
**Comentário:** O código calcula o valor total do carrinho multiplicando a quantidade de cada item pelo seu preço unitário e somando os valores.

### 14. Manipulando Objetos Complexos
**Objetivo:** Criar um objeto `empresa` com departamentos e funcionários, e usar `for in` e `for of` para exibir o nome dos funcionários e seus departamentos.  
**Comentário:** O código itera sobre os departamentos e seus funcionários, exibindo o nome de cada funcionário junto com o departamento.

### 15. Filtrando e Somando Valores
**Objetivo:** Criar um array de objetos `transacoes` e calcular o saldo final, somando entradas e subtraindo saídas.  
**Comentário:** O código calcula o saldo final ajustando o saldo com base no tipo de transação (entrada ou saída).

## Como Executar

Para executar os códigos dos exercícios, siga estas etapas:

1. **Salvar o Código**:
   - Copie o código de um dos exercícios e cole-o em um editor de texto.
   - Salve o arquivo com a extensão `.js`, por exemplo, `exercicio1.js`.

2. **Instalar o Node.js**:
   - Certifique-se de que o Node.js está instalado em seu computador. O Node.js é necessário para executar o código JavaScript fora do navegador.
   - Você pode baixar e instalar o Node.js a partir do [site oficial](https://nodejs.org/).

3. **Abrir o Terminal**:
   - Abra o terminal ou prompt de comando do seu sistema operacional.

4. **Navegar até o Diretório**:
   - Use o comando `cd` (change directory) para navegar até o diretório onde o arquivo `.js` está salvo. Por exemplo:
     ```bash
     cd /caminho/para/o/diretório
     ```

5. **Executar o Código**:
   - Execute o código usando o Node.js com o comando `node`, seguido pelo nome do arquivo. Por exemplo:
     ```bash
     node exercicio1.js
     ```
   - O terminal exibirá a saída do código, que pode incluir resultados, mensagens ou outros dados gerados pelo script.

6. **Verificar Resultados**:
   - Após a execução, verifique o terminal para ver os resultados produzidos pelo código. Caso o código tenha erros, o terminal também exibirá mensagens de erro que podem ajudar na depuração.

Repita esses passos para cada exercício que deseja executar, substituindo o nome do arquivo conforme necessário. Se você encontrar dificuldades ou erros, consulte a documentação do Node.js
ou busque ajuda em fóruns e comunidades de desenvolvedores.

