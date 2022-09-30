const aereasNacionais = ["Azul", "Gol", "Latam"];
const airCompanies = [
  ...aereasNacionais,
  "Delta",
  "United Airlines",
  "Emirates",
  "Qatar",
  "Tap",
];

console.log(airCompanies);

//atribuição por desestruturação.
// 0 - Azul
// 1 - Gol
// 2 - Latam
// 3 - Delta

const [azul, voeGol, latam, delta, ...internacionais] = airCompanies;

console.log(delta, "verificando a variável delta");
console.log(internacionais, "verificando a variável internacionais");

//Object Relation Map - ORM - tabela SQL ou documento NoSQL - Transforma em Objetos.
//hibernate - Java
// NodeJS - typeORM (Definição de estruturas de tabelas - DDL) - Prisma (Manipular os dados)

const user = {
  name: "Glaucio Daniel",
  email: "glauciodaniel@gmail.com",
  password: "123456",
};

const { password, ...data } = user;

console.log(data, " retornando dados da API");

//eventos - JavaScript é uma linguagem dirigida a eventos. Algo acontece, então reagimos(função).
// Eventos de tempo - setTimeout, setInterval
// Eventos de DOM - onClick, onChange, onSubmit
// Eventos de teclado - onKeyDown, onKeyUp, onKeyPress
// Eventos de mouse - onMouseDown, onMouseUp, onMouseMove
// Eventos de formulário - onFocus, onBlur, onChange
// Eventos de mídia - onPlay, onPause, onEnded
// Eventos de rede - onLoad, onError, onAbort

// quem.addEventListener("evento", função); - quem é o elemento que vai receber o evento.

const body = document.querySelector("body");
body.style.width = "100%";
body.style.height = "100vh";

body.addEventListener("mouseover", (event) => {
  body.style.backgroundColor = "#d4d4d4";
  console.log("executou o evento", event);
});
