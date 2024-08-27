const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");

/* La letra "e" es convertida para "enter"
   La letra "i" es convertida para "imes"
   La letra "a" es convertida para "ai"
   La letra "o" es convertida para "ober"
   La letra "u" es convertida para "ufat"
*/

function btnEncriptar() {
    const textoEncriptado = encriptar(textArea.value);
    mensaje.value = textoEncriptado;
    textArea.value = "";
    mensaje.style.backgroundImage = "none";  // Oculta la imagen de fondo cuando se encripta
}

function encriptar(stringEncriptada) {
    let codigoMatriz = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();  // Corregido a toLowerCase

    for (let i = 0; i < codigoMatriz.length; i++) {
        if (stringEncriptada.includes(codigoMatriz[i][0])) {
            stringEncriptada = stringEncriptada.replaceAll(codigoMatriz[i][0], codigoMatriz[i][1]);
        }
    }
    return stringEncriptada;
}

function btnDesencriptar() {
    const textoDesencriptado = desencriptar(textArea.value);
    mensaje.value = textoDesencriptado;
    textArea.value = "";
}

function desencriptar(stringDesencriptada) {
    let codigoMatriz = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase();  // Corregido a toLowerCase

    for (let i = 0; i < codigoMatriz.length; i++) {
        if (stringDesencriptada.includes(codigoMatriz[i][1])) {
            stringDesencriptada = stringDesencriptada.replaceAll(codigoMatriz[i][1], codigoMatriz[i][0]);
        }
    }
    return stringDesencriptada;
}
