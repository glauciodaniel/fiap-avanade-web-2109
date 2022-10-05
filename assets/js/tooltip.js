//const tooltip = document.querySelector("#tooltip");

const tooltip = (target, texto) => {
  const body = document.querySelector("body");
  const tooltipTarget = document.querySelector(target);

  tooltipTarget.addEventListener("mouseover", (e) => {
    if (document.querySelector(".tooltip")) {
      document.querySelector(".tooltip").remove();
    }

    const newDiv = document.createElement("div");
    newDiv.classList.add("tooltip");
    newDiv.innerHTML = texto;

    const largura = 200;
    newDiv.style.position = "fixed";
    newDiv.style.width = largura + "px";
    newDiv.style.top = e.clientY + "px";
    newDiv.style.display = "flex";
    newDiv.style.left =
      (e.clientX + largura > body.clientWidth
        ? e.clientX - largura - 20
        : e.clientX + largura) + "px";

    tooltipTarget.parentNode.appendChild(newDiv);
  });

  tooltipTarget.addEventListener("mouseout", (e) => {
    if (document.querySelector(".tooltip")) {
      document.querySelector(".tooltip").remove();
    }
  });
};

tooltip("#tooltip", "texto do tooltip");
