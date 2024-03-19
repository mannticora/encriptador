document.addEventListener("DOMContentLoaded", function() {
    let campoTexto = document.getElementById("textoUsuario");
    let textoaMensaje = document.querySelector(".mensaje"); // Seleccionar el textarea con la clase "mensaje"

    campoTexto.addEventListener("input", function() {
        let textoIngresado = campoTexto.value;
        campoTexto.value = textoIngresado.toLowerCase();
    });

    let botonEncriptar = document.getElementById("Encriptar");
    botonEncriptar.addEventListener("click", function() {
        let textoIngresado = campoTexto.value;
        let textoEncriptado = textoIngresado.replace(/[aeiou]/gi, function(match) {
            return {
                'a': 'ai',
                'e': 'enter',
                'i': 'imes',
                'o': 'ober',
                'u': 'ufat'
            }[match.toLowerCase()] || match;
        });
        textoaMensaje.textContent = textoEncriptado; // Modificar el valor del textarea con la clase "mensaje"
        campoTexto.value = "";
    });

    let botonDesencriptar = document.getElementById("Desencriptar");
    botonDesencriptar.addEventListener("click", function() {
        let textoIngresado = campoTexto.value;
        let textoEncriptado = textoIngresado.replace(/ai|enter|imes|ober|ufat/gi, function(match) {
            return {
                'ai': 'a',
                'enter': 'e',
                'imes': 'i',
                'ober': 'o',
                'ufat': 'u'
            }[match.toLowerCase()] || match;
        });
        textoaMensaje.textContent = textoEncriptado; // Modificar el valor del textarea con la clase "mensaje"
        campoTexto.value = "";
    });

    let botonCopiar = document.querySelector(".botonCopiar"); // Seleccionar el botón con la clase "botonCopiar"
    botonCopiar.addEventListener("click", function(){

        let textoEncriptado = textoaMensaje.textContent; // Modificar para obtener el texto del textarea con la clase "mensaje"

        let textareaTemp = document.createElement("textarea");

        textareaTemp.value = textoEncriptado;

        document.body.appendChild(textareaTemp);

        textareaTemp.select();

        document.execCommand("copy");

        document.body.removeChild(textareaTemp);

        alert("Texto copiado al portapapeles");
    });
});