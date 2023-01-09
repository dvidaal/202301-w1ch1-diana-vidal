let operacion1;
let operacion2;
let operacion3;
let performance;

const iniciamosCalculadoraPRO = () => {
  let showOperation = document.getElementById("showOperation");
  let resultado = document.getElementById("resultado");
  let reset = document.getElementById("reset");
  let suma = document.getElementById("suma");
  let minus = document.getElementById("minus");
  let multi = document.getElementById("multi");
  let divi = document.getElementById("divi");
  let equal = document.getElementById("equal");
  let root = document.getElementById("root");
  let one = document.getElementById("one");
  let two = document.getElementById("two");
  let three = document.getElementById("three");
  let four = document.getElementById("four");
  let five = document.getElementById("five");
  let six = document.getElementById("six");
  let seven = document.getElementById("seven");
  let eight = document.getElementById("eight");
  let nine = document.getElementById("nine");
  let cero = document.getElementById("cero");
};


one.onclick = function () {
  resultado.textContent = resultado.textContent + "1";
};
two.onclick = function () {
  resultado.textContent = resultado.textContent + "2";
};
three.onclick = function () {
  resultado.textContent = resultado.textContent + "3";
};
four.onclick = function () {
  resultado.textContent = resultado.textContent + "4";
};
five.onclick = function () {
  resultado.textContent = resultado.textContent + "5";
};
six.onclick = function () {
  resultado.textContent = resultado.textContent + "6";
};
seven.onclick = function () {
  resultado.textContent = resultado.textContent + "7";
};
eight.onclick = function () {
  resultado.textContent = resultado.textContent + "8";
};
nine.onclick = function () {
  resultado.textContent = resultado.textContent + "9";
};
cero.onclick = function () {
  resultado.textContent = resultado.textContent + "0";
};
reset.onclick = function () {
  resCalculator();
};
suma.onclick = function () {
  operacion1 = resultado.textContent;
  performance = "+";
  showOperation.textContent = operacion1 + performance;
  clearAll();
};
minus.onclick = function () {
  operacion1 = resultado.textContent;
  performance = "-";
  showOperation.textContent = operacion1 + performance;
  clearAll();
};
multi.onclick = function () {
  operacion1 = resultado.textContent;
  performance = "*";
  showOperation.textContent = operacion1 + performance;
  clearAll();
};
divi.onclick = function () {
  operacion1 = resultado.textContent;
  performance = "/";
  showOperation.textContent = operacion1 + performance;
  clearAll();
};
equal.onclick = function () {
  operacion2 = resultado.textContent;
  
  showingResults();
};

root.onclick = function () {
    operacion1 = resultado.textContent;
    rootOperation();
}

punto.onclick = function () {
    if(!resultado.textContent.includes(".")){
        resultado.textContent = resultado.textContent + ".";
    }
}




const clearAll = () => {
  resultado.textContent = "";
}

const resCalculator = () => {
  resultado.textContent = "";
  operacion1 = 0;
  operacion2 = 0;
  performance = "";
  showOperation.textContent = "";
 
}

const rootOperation = () => {
    resultado.textContent = parseFloat(Math.sqrt(operacion1).toFixed(3));
}



const showingResults = () => {
  let res = 0;
  switch (performance) {
    case "+":
      showOperation.textContent = operacion1 + "+" + operacion2;
      res = parseFloat(operacion1) + parseFloat(operacion2) + parseFloat(operacion3);
      break;

    case "-":
      showOperation.textContent = operacion1 + "-" + operacion2;
      res = parseFloat(operacion1) - parseFloat(operacion2);
      break;

    case "*":
      showOperation.textContent = operacion1 + "*" + operacion2;
      res = parseFloat(operacion1) * parseFloat(operacion2);
      break;

    case "/":
      showOperation.textContent = operacion1 + "/" + operacion2;
      res = parseFloat(operacion1) / parseFloat(operacion2);
     /*  if(parseFloat(operacion1) / 0){
        alert("NO ES UN NÚMERO");
      } */
      break;
  }
  resCalculator();
  resultado.textContent = res;
}
