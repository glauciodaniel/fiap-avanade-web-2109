const cep = document.querySelector("#cep");
cep.addEventListener("blur", (e) => {
  let search = cep.value.replace("-", "");

  if (search.length < 8 || Number(search.value) === NaN) {
    alert("CEP inválido!");
    cep.focus();
    return;
  }

  const options = {
    method: "GET",
    mode: "cors",
    cache: "default",
  };

  //recurso assíncrono, retorna uma promise por que eu não sei se vai funcionar.
  //Promise é um recurso que não temos certeza se deu certo ou não, é uma intenção.
  //Se der certo ele vai retornar o resolve, se der errado ele vai retornar o reject.
  //resolver quer dizer, funcionou, aí usamos a função then, se der errado, usamos o catch.
  fetch(`https://viacep.com.br/ws/${search}/json/`, options)
    .then((response) => {
      response.json().then((result) => {
        console.log(result);
      });
    })
    .catch((err) => {
      console.log(e.message);
    });
});
