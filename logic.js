document.getElementById("resultado").disabled = true;
document.getElementById("Copy").style.display = 'none';

document.getElementById("DesCifrado").onclick = function () {
    DesEncriptar();
}


// creamos el evento para cada tecla pulsada
document.getElementById("ingreso").addEventListener("keypress", verificar);


function verificar(e) {
    document.getElementById("Cifrado").onclick = function () {
        if (e.key.match(/[a-z\s]/g) === null) {
            
            alert("Solo se pueden ingresar letras minusculas");
            //Si no se cumple la condicion que el campo de ingreso se vuelva vacio
            document.getElementById("ingreso").value = "";
            document.getElementById("resultado").value = "";
            // Si la tecla pulsada no es la correcta, eliminado la pulsación
            e.preventDefault();
        }else{
            Encriptar();
        } 
    }    
      
}



function Encriptar() {
    var entrada = document.getElementById("ingreso").value;
    var cifrar;
    cifrar = entrada.replaceAll("e", "enter")
        .replaceAll("i", "imes")
        .replaceAll("a", "ai")
        .replaceAll("o", "ober")
        .replaceAll("u", "ufat")

    document.getElementById("Copy").style.display = 'block';
    document.getElementById("muneco").style.visibility = 'hidden'
    document.getElementById("text1").style.display = 'none';
    document.getElementById("text2").style.display = 'none';
    document.getElementById("resultado").innerHTML = cifrar;
}

function DesEncriptar() {
    var entra = document.getElementById("ingreso").value;
    var descifrar;

    if (entra.indexOf("ai", "enter", "imes", "ober", "ufat")) {
        descifrar = entra.replaceAll("enter", "e")
            .replaceAll("imes", "i")
            .replaceAll("ai", "a")
            .replaceAll("ober", "o")
            .replaceAll("ufat", "u")
    }

    document.getElementById("resultado").innerHTML = descifrar;
}
function Copiar() {
    var content = document.getElementById('resultado');
    document.getElementById("resultado").disabled = false;
    content.select();
    document.execCommand('copy');
    document.getElementById("resultado").disabled = true;

}