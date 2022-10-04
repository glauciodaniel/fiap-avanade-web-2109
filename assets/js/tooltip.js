const tooltip = document.querySelector("#tooltip");
const body = document.querySelector("body");
const header = document.querySelector(".top-site");

// alvo.addEventListener("evento", função);

// mouseover, função arrow no body.
// mouseout, função arrow no body devolve sem cor.

body.addEventListener("mouseover", () => {
  body.style.background = "gray";
});

body.addEventListener("mouseout", () => {
  body.style.background = "unset";
});
