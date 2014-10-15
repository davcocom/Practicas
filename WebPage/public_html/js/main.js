var main = function() {
    $('.list-group-item').click(function() {
        $(this).toggleClass("active");
        var parrafo = document.createElement('li');
        // Crear nodo de tipo Text
        var contenido = document.createTextNode("Hola Mundo!");
        // Añadir el nodo Text como hijo del nodo Element
        parrafo.appendChild(contenido);
        // Añadir el nodo Element como hijo de la pagina
        $('.reciente').append(parrafo);
    });
};
$(document).ready(main);
