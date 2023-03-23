// JavaScript code

const search = [
  {
    file: "h1.html",
    tags: ["h1"],
  },
];

function buscar_etiquetas() {
  let input = document.getElementById("search").value;
  //document: representa cualquier página web cargada en el navegador y sirve como punto de entrada al contenido de la página web
  //document.getElementById: Devuelve una referencia al elemento por su ID

  input = input.toLowerCase();
  //El método toLowerCase() devuelve el valor en minúsculas de la cadena que realiza la llamada.

  const result = search.find((s) => s.tags.includes(input));

  document.location.href = location.origin + "/" + result.file;
}
