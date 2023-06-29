//Ocultar y mostrar elementos
const boton = document.getElementById("btn__encrypt");
const elementosHidden = document.getElementsByClassName("hidden");
const elementoNoHidden = document.getElementById("nohidden");
boton.addEventListener("click", function () {
  elementoNoHidden.style.display = "none";

  for (let i = 0; i < elementosHidden.length; i++) {
    elementosHidden[i].style.display = "block";
  }
});

// Logicar de la encriptacion

const encriptar = () => {
  const texto = document.getElementById("texto").value;
  const sustituciones = {
    e: "enter",
    i: "imes",
    a: "ai",
    o: "ober",
    u: "ufat",
  };
  const resultado = texto.replace(/[eioua]/g, (c) => sustituciones[c]);
  document.getElementById("resultado").value = resultado;

  document.getElementById("copiar").style.display = "block";
};

const desencriptar = () => {
  const sustituciones = {
    enter: "e",
    imes: "i",
    ai: "a",
    ober: "o",
    ufat: "u",
  };
  const texto = document.getElementById("texto").value;
  const resultado = texto.replace(
    /enter|imes|ai|ober|ufat/g,
    (c) => sustituciones[c]
  );
  document.getElementById("resultado").value = resultado;

  document.getElementById("decrypt__copy").style.display = "block";
};

async function copiar() {
  var resultado = document.getElementById("resultado");
  await navigator.clipboard.writeText(resultado.value);
}

document.getElementById("btn__encrypt").addEventListener("click", encriptar);
document.getElementById("btn__decrypt").addEventListener("click", desencriptar);
document.getElementById("decrypt__copy").addEventListener("click", copiar);
