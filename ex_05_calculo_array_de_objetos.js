/*5. Calculando Valores em Arrays de Objetos
- Objetivo: Crie um array de objetos alunos, cada um com propriedades
nome, nota1, e nota2. Use "for of" para calcular a média das notas de cada
aluno e exibir o nome do aluno junto com sua média.*/

const studentsArrayObject = [
    {
        name: "William",
        grade1: 8.5,
        grade2: 9.9
    },
    {
        name: "Caroline",
        grade1: 10,
        grade2: 8.5
    },
    {
        name: "Maggie",
        grade1: 10,
        grade2: 10
    }
]

console.log('Average Grades:');

for(let student of studentsArrayObject){
    let avaregeGrade = (student.grade1 + student.grade2) / 2;
    console.log(`${student.name} : ${student.grade1} + ${student.grade2} = ${avaregeGrade}`);
}