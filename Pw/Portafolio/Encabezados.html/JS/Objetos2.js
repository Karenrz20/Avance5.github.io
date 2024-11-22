let lanzaPrompt = document.getElementById("lanzaPrompt");

lanzaPrompt.addEventListener("click", function (event) {
  event.preventDefault(); 
  let nombre = prompt("¿Cómo te llamas?"); 

  if (nombre) {
    alert(`Hola ${nombre}`); 
  } else {
    alert("Anónimo"); 
  }
});
let lista = document.getElementById("log");

function registro(texto) {
  let item = document.createElement("li");
  item.innerText = texto;
  return item;
}


lista.insertBefore(registro("✅ DOM LOADED"), lista.firstChild);

let timer = setTimeout(() => {
  lista.insertBefore(registro("⌛ Fin del timer (3s)"), lista.firstChild);
}, 3000);


let repetidor = setInterval(() => {
  lista.insertBefore(registro("⏱ +1.5s"), lista.firstChild);
}, 1500);

let activaTimerBtn = document.getElementById("activaTimer");
let stopBtn = document.getElementById("pararRepetidor");
let resetBtn = document.getElementById("reactivarRepetidor");

activaTimerBtn.addEventListener("click", function () {
  lista.insertBefore(registro("🎉 Inicia timer..."), lista.firstChild);
  clearTimeout(timer); 
  timer = setTimeout(() => {
    lista.insertBefore(registro("⌛ Fin del timer (3s)"), lista.firstChild);
  }, 3000); 
});

stopBtn.addEventListener("click", function () {
  lista.insertBefore(
    registro("🛑 Se detuvo el repetidor..."),
    lista.firstChild
  );
  clearInterval(repetidor); 
});

resetBtn.addEventListener("click", function () {
  lista.insertBefore(
    registro("🔄 Se reactivó el repetidor..."),
    lista.firstChild
  );
  clearInterval(repetidor); 
  repetidor = setInterval(() => {
    lista.insertBefore(registro("⏱ +1.5s"), lista.firstChild);
  }, 1500); 
});
console.table(location);

let secure = document.getElementById("secure");

if (location.protocol == "https") {
  secure.innerText = "Seguro"; 
} else {
  secure.innerText = "No seguro"; 
}
let historial = document.getElementById("historial");
let historial_navegacion = history.length;

historial.appendChild(
  registro(
    `Hay ${historial_navegacion} elementos en el historial de navegación`
  )
);

let link_anterior = document.createElement("a");
link_anterior.href = "javascript:history.back()";
link_anterior.innerText = "Volver a la página anterior";

let item_anterior = document.createElement("li");
item_anterior.appendChild(link_anterior);
historial.appendChild(item_anterior);

let link_siguiente = document.createElement("a");
link_siguiente.href = "javascript:history.forward()";
link_siguiente.innerText = "Ir a la página siguiente";

let item_siguiente = document.createElement("li");
item_siguiente.appendChild(link_siguiente);
historial.appendChild(item_siguiente);