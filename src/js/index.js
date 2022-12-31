
const txtinput = document.querySelector(".input");
const txtoutput = document.querySelector(".output");
const txterror = document.querySelector(".txterror");
const imagen = document.getElementById("img");
const btnEncriptar = document.querySelector(".btnEncriptar");
const btnDesencriptar = document.querySelector(".btnDesencriptar");
const btnCopy = document.getElementById("btnCopy");
const msgError = document.getElementById("msgError");
const input = RegExp("^[a-z ]+$");

btnCopy.style.display="none";
txtoutput.style.display="none";
txtinput.focus();
function encriptar(){
    if (input.test(txtinput.value)) {
        txtoutput.style.display="block";
        txtoutput.innerHTML = (((((txtinput.value).replace(/\e/g,"enter")).replace(/\i/g,"imes")).replace(/\a/g,"ai")).replace(/\o/g,"ober")).replace(/\u/g,"ufat");
        imagen.style.display="none";
        btnCopy.style.display="block";
        msgError.style.display="none";
        txtinput.focus();
    } else if(txtinput.value="") {
        txtoutput.style.display="none";
        btnCopy.style.display="none";
        imagen.style.display="block";
        msgError.style.display="block";
    }else{
        msgError.style.display="block";
        imagen.style.display="block";
    }
}

function desencriptar(){
    if (input.test(txtinput.value)) {
        txtoutput.style.display="block";
        txtoutput.innerHTML = (((((txtoutput.value).replace(/enter/g,"e")).replace(/imes/g,"i")).replace(/ai/g,"a")).replace(/ober/g,"o")).replace(/ufat/g,"u");
        btnCopy.style.display="block";
        imagen.style.display="none";
        msgError.style.display="none";
        txtinput.focus();
    } else if(txtinput.value="") {
        txtoutput.style.display="none";
        btnCopy.style.display="none";
        imagen.style.display="block";
        msgError.style.display="block";
    }else{
        msgError.style.display="block";
        imagen.style.display="block";
    }
}

function ocultar(){
    if (txtinput.value!="") {
        txtoutput.style.display="block";
        imagen.style.display="none";
        msgError.style.display="none";
    } else {
        txtoutput.style.display="none";
        btnCopy.style.display="none";
        imagen.style.display="block";
        msgError.style.display="block";
    }
}
function copy(){
    txtoutput.focus();
    document.execCommand("selectAll");
    document.execCommand("copy");  
}



