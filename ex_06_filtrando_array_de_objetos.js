/*6. Filtrando Arrays de Objetos
- Objetivo: Crie um array de objetos funcionarios, onde cada objeto
contém informações como nome, cargo, e salario. Use "for of" para filtrar
e exibir apenas os funcionários cujo salário seja maior que um valor
específico.*/

const employeesArrayofObjects = [
    {
        name: "William",
        position: "Web Developer",
        wage: 4500.00
    },
    {
        name: "Caroline",
        position: "Occupational Therapist",
        wage: 6000.00
    },
    {
        name: "Maggie",
        position: "Guard Dog",
        wage: 10500
    }
]

const salaryThreshold = 5000;

for(let employee of employeesArrayofObjects){
    if(employee.wage > salaryThreshold){
        console.log(`Name: ${employee.name}; Position: ${employee.position}; Wage: ${employee.name}`);
    }
}