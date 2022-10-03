//trabalhando com JavaScript em um arquivo externo.
const nome = "Fiap";
console.log(nome, " chamando variável criada com var");
//nome = "Avanade";

escreve("Exemplo de função nominal");

//função nominal - udf
function escreve(titulo) {
  //alert(titulo);
}

//7 tipos diferentes de erros em JavaScript - 3 são os mais comuns.
// 1 - SyntaxError - escreveu algo errado
// 2 - ReferenceError - chamou quem não existe ou não está acesível
// 3 - TypeError - violou alguma regra do javascript
// 4 - RangeError - estourou o limite de aninhamento ou faixa de valores.
// 5 - EvalError - existe um comando perigoso no JavaScript chamado eval.
// 6 - InternalError - memória, processamento, crash no chrome ou v8
// 7 - URIError - erros que acontecem ao consumir dados externos, com url inválidas.

//existem 4 formas de criar uma função em JavaScript

//função nominal - sofre hoisting.
function mudaTitulo(novoTitulo) {
  document.querySelector("h1").innerHTML = novoTitulo;
}

//escopo, orientação a objetos.

mudaTitulo("Vai Corinthians");
// expressão de função - Function Expression
//função anônima
const mudaTitulo2 = function (target, novoTitulo) {
  document.querySelector(target).innerHTML = novoTitulo;
};

mudaTitulo2("h1", "Trocando o título");

//  Arrow Function - É uma função criada no ES6 ou ES2015
// não existe o this dentro de uma arrow function.
// não existe um método construtor.
// sintaxe mais simples e prática.
const relogio = () => {
  const date = new Date();
  mudaTitulo2("h2", date.toLocaleTimeString());
};

setInterval(relogio, 1000);

// setInterval(() => {},tempo);

const frases = ["A vida é bela", "A vida é curta", "A vida é uma dádiva"];

const mudaFrase = (alvo, texto, tempo) => {
  //const frase = frases[Math.floor(Math.random() * frases.length)];
  //mudaTitulo2("h3", frase);
  let total = 2;
  setInterval(() => {
    document.querySelector(alvo).innerHTML =
      texto[total >= texto.length - 1 ? (total = 0) : (total += 1)];
  }, tempo * 1000);
};

mudaFrase("h1", frases, 4);
