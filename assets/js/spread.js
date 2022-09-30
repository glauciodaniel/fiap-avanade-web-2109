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
