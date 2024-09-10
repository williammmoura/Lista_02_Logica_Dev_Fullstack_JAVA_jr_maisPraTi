/*14. Manipulando Objetos Complexos
- Objetivo: Crie um objeto empresa com uma propriedade departamentos,
que é um array de objetos. Cada departamento tem um nome e uma lista
de funcionarios. Use for in e for of para iterar sobre os departamentos
e seus funcionários, exibindo o nome de cada funcionário junto com o
departamento ao qual pertence.*/

const enterprise = {
    departments: [
        {
            name: "Financial",
            employees: ["Alice", "Bruno", "Carla"]
        },
        {
            name: "Human Resources",
            employees: ["Daniel", "Elisa"]
        },
        {
            name: "IT",
            employees: ["William", "Gabriela", "Henrique"]
        }
    ]
};

// Iterando sobre os departamentos
for (let department of enterprise.departments) {
    console.log(`Department: ${department.name}`);

    // Iterando sobre os funcionários de cada departamento
    for (let employee of department.employees) {
        console.log(`Employee: ${employee}`);
    }
}