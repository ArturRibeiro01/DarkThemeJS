// Exemplo básico de concatenação de Strings
const consoleText = "O valor do resultado é ";
let valor1 = 34;
let valor2 = 77489328743;
const resultado = valor1 + valor2;

console.info(consoleText, resultado);
console.info(`Esse é o valor do Resultado: ${parseInt(resultado)}`);

// Boleanos
const valoresBooleanos = false;
const result = valoresBooleanos ? "Aprovado" : "Reprovado";
console.info(result);

// array
const array = [4, 5, 6];
const somaArray = array.map((number) => number + 1);
console.info(somaArray);

//objeto
const people = { fisrtname: "Artur", lastName: "Ribeiro" };
const completeName = ` Meu nome é ${people.fisrtname} ${people.lastName}`;

//

// manipulação do Dom

//seleciona documentos por id, classe ou elemento.
document.querySelector();
document.querySelectorAll();

// selecionar uma classe no documento direto, facilita quando vc não sabe onde tem outros elementos com a mesma classe ou id mas precisa mudar todos.
document.body;
