
resultado= document.getElementById("resultado")

function numero(x){
    if (resultado.value==0)
    resultado.value=""
    resultado.value+=x
    almacenar = resultado.value
}
function a(){
    resultado.value="0";
}
function borrar() {
    cifras = almacenar.length;
    eliminar = almacenar.substr(cifras - 1, cifras)
    almacenar = almacenar.substr(0, cifras - 1)
    resultado.value = almacenar
    if (almacenar == "") { 
        resultado.value = "0"; 
    }
    if (eliminar == ".") {
        coma = 0; 
    }

}