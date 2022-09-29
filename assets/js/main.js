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

//função nominal
function mudaTitulo(novoTitulo) {
  document.querySelector("h1").innerHTML = novoTitulo;
}

mudaTitulo("Vai Corinthians");
// expressão de função - Function Expression
//função anônima
const mudaTitulo2 = function (novoTitulo) {
  document.querySelector("h2").innerHTML = novoTitulo;
};

mudaTitulo2("Trocando o subtítulo");

const relogio = () => {
  const date = new Date();
  mudaTitulo2(date.toLocaleTimeString());
};

setInterval(relogio, 1000);
