const h1 = document.querySelector("h1");
//const p = document.querySelector("p");
// const parrafito = document.getElementsByClassName("parrafito");
// const pid = document.getElementById("pid");
const input1 = document.querySelector("#calculo1");
const input2 = document.querySelector("#calculo2");
const btn = document.querySelector("#btnCalcular");
const pResult = document.querySelector("#result");
const form = document.querySelector("#form");
/* 
---------------------------------------
console.log(input.value);

console.log({
  h1,
  p,
  parrafito,
  pid,
  input,
});

h1.innerHTML = "Patito <br> Feo";
h1.innerText = "Patito <br> Feo";
console.log(h1.getAttribute('class'))
h1.setAttribute('class', 'rojo');

h1.classList.add("rojo");
h1.classList.remove("verte");
/*h1.classList.toggle('verde');
  h1.classList.contains('verde');

input.value = "456";

const img = document.createElement("img");

img.setAttribute(
  "src",
  "https://static.platzi.com/media/achievements/practico-javascript_badge-fb533fa5-73c8-4f75-9d81-0294d9013ab5.png"
);

Acá colocamos la imagen en el tag p reemplazando su contenido actual
pid.innerHTML = ""; Esto hará que se borre su contenido
pid.append(img);
---------------------------------------
*/

form.addEventListener("click", sumarInputsValues);

function sumarInputsValues(event) {
  event.preventDefault();
  const sumaNumbers = Number(input1.value) + Number(input2.value);
  pResult.innerText = `La suma es: ${sumaNumbers}`;
}
