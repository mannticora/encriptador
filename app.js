
var campoTexto = document.getElementById("textoUsuario");

campoTexto.addEventListener("input", function() {
    var textoIngresado = campoTexto.value;
    campoTexto.value = textoIngresado.toLowerCase();
});

var botonGuardar = document.getElementById("guardarTexto");
var textoaEncriptar = document.getElementById("texto-a-encriptar")

botonGuardar.addEventListener("click", function() {
    // Obtiene el valor del campo de entrada de texto y lo guarda en una variable
    var textoIngresado = campoTexto.value;
    // Actualiza el contenido del elemento donde se mostrará el texto guardado
    textoaEncriptar.textContent = textoIngresado;
    // Limpia el campo de entrada de texto después de guardar el texto
    campoTexto.value = "";
});
