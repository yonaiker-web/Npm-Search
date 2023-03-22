// JavaScript code

function buscar_etiquetas() {
  let input = document.getElementById("buscador").value;
  //document: representa cualquier página web cargada en el navegador y sirve como punto de entrada al contenido de la página web
  //document.getElementById: Devuelve una referencia al elemento por su ID

  input = input.toLowerCase();
  //El método toLowerCase() devuelve el valor en minúsculas de la cadena que realiza la llamada.

  let x = document.getElementsByClassName("etiquetas");
  //Retorna un objecto similar a un array de los elementos hijos que tengan todos los nombres de clase indicados. Cuando es llamado sobre el objeto document , la busqueda se realiza en todo el document, incluido el nodo raíz

  for (i = 0; i < x.length; i++) {
    //Ciclo for que recorre todas las etiquetas disponibles

    if (!x[i].innerHTML.toLowerCase().includes(input)) {
      //Condicional donde evaluamos las etiquetas en tiempo real, las convertimos en minuscula y comparamos con el input del buscador
      //La propiedad Element.innerHTML devuelve o establece la sintaxis HTML describiendo los descendientes del elemento.
      //El método includes() determina si una matriz incluye un determinado elemento, devuelve true o false según corresponda.

      //Si la etiqueta es diferente al input del buscador la escondemos de la pantalla
      x[i].style.display = "none";

      //La propiedad.style.display establece o devuelve el tipo de pantalla del elemento
    } else {
      //Sino, si la etiqueta es igual al input del buscador la mostramos en pantalla de la pantalla
      x[i].style.display = "lista-etiquetas";
    }
  }
}
