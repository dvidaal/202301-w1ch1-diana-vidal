window.addEventListener("load", () => {
  const display = document.querySelector(".resultado");
  const keypadButtons = document.getElementsByClassName("keypad-button");

  const keypadButtonsArray = Array.from(keypadButtons);

  keypadButtonsArray.forEach((button) => {
    button.addEventListener("click", () => {
      calcula(button, resultado);
    });
  });
});

const calcula = (button, resultado) => {
  switch (button.innerHTML) {
    case "C":
      borrar(resultado);
      break;
    case "=":
      resultadoTotal(resultado);
      break;
    case "√":
      rootOperation(resultado);
      break;
    case ".":
      punto(resultado);
      break;
    default:
      reset(resultado, button);
      break;
  }
};

const punto = () => {
  if (!resultado.textContent.includes("." || 0)) {
    resultado.textContent = resultado.textContent + ".";
  }
};
const resultadoTotal = (resultado) => {
  resultado.innerHTML = parseFloat(eval(resultado.innerHTML).toFixed(3));
};

const reset = (resultado, button) => {
  if (resultado.innerHTML === 0) {
    resultado.innerHTML = "";
  }
  resultado.innerHTML += button.innerHTML;
};

const borrar = (resultado) => {
  resultado.innerHTML = "";
};

const rootOperation = (button) => {
  resultado.innerHTML = parseFloat(Math.sqrt(resultado.innerHTML).toFixed(3));
};
