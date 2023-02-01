//01 - Crie um array que receba 5 itens e exiba no console.
console.log("\n Exercicio 1: \n");

let nomes = ["Milena", "Bia", "Geovana", "Ricardo"];
console.log(nomes);

// 02 - Utilize um método para adicionar um nome ao inicio do array.
console.log("\n Exercicio 2: \n");

nomes.unshift("Mikael");
console.log(nomes);

// 03 - Utilize um método para remover o último nome do array.
console.log("\n Exercicio 3: \n");

nomes.pop();
console.log(nomes);

// 04 - Utilize um método para adicionar dois nomes ao fim do array.
console.log("\n Exercicio 4: \n");

nomes.push("Henrique", "Marcos");
console.log(nomes);

// 05 - Utilize um método para remover o primeiro nome do array.
console.log("\n Exercicio 5: \n");

nomes.shift();
console.log(nomes);

// 06 - Utilize um método para organizar em ordem crescente o seguinte array:
console.log("\n Exercicio 6: \n");

let numbers = [7, 5, 6, 3, 8, 9, 2, 1, 4];

numbers.sort(function (a, b) {
  return a - b;
});
console.log(numbers);

// 07 - Crie um objeto que receba ao menos três propriedades sobre você.

let propriedades = { Nome: "Milena", Idade: 24, Pais: "Portugal" };

// 08 - Adicione uma nova propriedade sem alterar seu objeto inicial.

propriedades.cor = "azul";

// 09 - Remova uma propriedade desse objeto.

delete propriedades.cor;

// 10 - Mostre no console todas as propriedades desse objeto.
console.log("\n Exercicio 10: \n");
console.log(propriedades);

// 11- Crie um array  chamado "cadastro" contendo ao menos 5 objetos.
// Cada objeto deve receber as seguintes propriedades: nome,  idade,  telefone, amigos.
// Na propriedade amigos, adicione ao menos 4 itens.

let cadastro = [
  {
    Nome: "Milena",
    Idade: 24,
    Telefone: 5487896,
    Amigos: ["Mag", "Lucas", "Debora", "Railan"],
  },
  {
    Nome: "Railan",
    Idade: 34,
    Telefone: 5487896,
    Amigos: ["Milena", "Tiago", "Dayan", "Claudio"],
  },
  {
    Nome: "Alice",
    Idade: 7,
    Telefone: 5487896,
    Amigos: ["Milena", "Vânia", "Júlia", "Demetrio"],
  },
  {
    Nome: "Debora",
    Idade: 26,
    Telefone: 5487896,
    Amigos: ["Milena", "Aurora", "Diogo", "Monica"],
  },
  {
    Nome: "Monica",
    Idade: 26,
    Telefone: 5487896,
    Amigos: ["Debora", "Aurora", "Francisco", "Milena"],
  },
];

// 12 - Mostre no console o nome de um amigo de cada lista.

console.log("\n Exercicio 12: \n");
console.log(cadastro[0].Amigos);
console.log(cadastro[1].Amigos);
console.log(cadastro[2].Amigos);
console.log(cadastro[3].Amigos);
console.log(cadastro[4].Amigos);
