// JavaScript code

//objetos que almancena todas las paginas en el buscador
const search = [
  {
    file: "h1.html",
    tags: ["h1"],
  },
  {
    file: "head.html",
    tags: ["head"],
  },
  {
    file: "link.html",
    tags: ["link"],
  },
  {
    file: "title.html",
    tags: ["title"],
  },
];

//funcion del buscador
function buscar_etiquetas() {
  //variable que obtiene lo que este en la caja del buscador
  let input = document.getElementById("search").value;

  input = input.toLowerCase();
  //El método toLowerCase() devuelve el valor en minúsculas de la cadena que realiza la llamada.

  //resultado de lo que aparezca en el gustador que este incluido en el objeto de las paginas almacenadas
  const result = search.find((s) => s.tags.includes(input));

  //redireccion a la pagina con alguna resultado
  document.location.href = location.origin + "/" + result.file;
}
