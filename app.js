document.addEventListener("DOMContentLoaded", function() {
    let campoTexto = document.getElementById("textoUsuario");
    let textoaEncriptar = document.getElementById("textoResultado");

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
        textoaEncriptar.textContent = textoEncriptado;
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
        textoaEncriptar.textContent = textoEncriptado;
        campoTexto.value = "";
    });

    let botonCopiar = document.getElementById("botonCopiar");
    botonCopiar.addEventListener("click", function(){

        let textoEncriptado = textoaEncriptar.textContent;

        let textareaTemp = document.createElement("textarea");

        textareaTemp.value = textoEncriptado;

        document.body.appendChild(textareaTemp);

        textareaTemp.select();

        document.execCommand("copy");

        document.body.removeChild(textareaTemp);

        alert("Texto copiado al portapapeles");
    });
});