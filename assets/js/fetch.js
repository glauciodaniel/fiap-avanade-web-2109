const cep = document.querySelector("#cep");

const showData = (result) => {
  for (const campo in result) {
    if (document.querySelector("#" + campo)) {
      document.querySelector("#" + campo).value = result[campo];
    }
  }
};

cep.addEventListener("blur", async (e) => {
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
  // axios - biblioteca javascript que usa fetch e XHR.
  try {
    const resultado = await fetch(
      `https://viacep.com.br/ws/${search}/json/`,
      options
    );
    const json = await resultado.json();
    showData(json);
  } catch (error) {
    console.log("Temos um problemas", error.message);
  }
});

//   fetch(`https://viacep.com.br/ws/${search}/json/`, options)
//     .then((response) => {
//       response.json().then((result) => {
//         console.log(result);
//       });
//     })
//     .catch((err) => {
//       console.log(e.message);
//     });

//outra forma de fazer o mesmo código acima é:
