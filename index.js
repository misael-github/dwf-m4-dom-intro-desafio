const cosasQueAprendimos = [
  {
    tema: "terminal",
    class: "",
  },
  {
    tema: "node",
    class: "",
  },
  {
    tema: "oop",
    class: "",
  },
  {
    tema: "typescript",
    class: "",
  },
  {
    tema: "css",
    class: "",
  },
  {
    tema: "dom",
    class: "special",
  },
];

function main() {
  const listaEls = document.querySelectorAll(".lista li");

//  variable   | objeto o elemento
  for (let el of listaEls) {
    el.remove();
  }

  for (let item of cosasQueAprendimos) {
    const newLiEl = document.createElement("li"); // Creamos las etiquetas li
    newLiEl.textContent = item.tema; // Le ponemos de texto lo que tengo en la prop. tema de cada objeto
    newLiEl.classList.add(item.class || "item"); // Le añadimos la clase que tenemos en los objetos o item
    const lista = document.querySelector(".lista"); // Seleccionamos la lista
    lista.appendChild(newLiEl); // Añadimos al elemento que le quiero agregar y (elemento que agrego)
  }
}

main();
