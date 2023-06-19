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

  document.getElementById("copiar").style.display = "block";
};

async function copiar() {
  var resultado = document.getElementById("resultado");
  await navigator.clipboard.writeText(resultado.value);
}

// document.getElementById("texto").addEventListener("keyup", function (event) {
//   if (event.keyCode === 13) {
//     // Código de la tecla Enter es 13
//     event.preventDefault();
//     encriptar();
//   }
// });

document.getElementById("encriptar").addEventListener("click", encriptar);
document.getElementById("desencriptar").addEventListener("click", desencriptar);
document.getElementById("copiar").addEventListener("click", copiar);
