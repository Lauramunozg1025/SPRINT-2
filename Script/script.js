// Declaramos las variables con las que vamos a hacer las operaciones
let operadoa, operadob, operacion;

// Variables
resultado = document.getElementById("resultado");
almacenar = resultado.value;

suma = document.getElementById('mas');
resta = document.getElementById('menos');
multiplicacion = document.getElementById('por');
division = document.getElementById('division');
porcentaje = document.getElementById('porcentaje');
masMenos = document.getElementById('masMenos');
igual = document.getElementById('igual');

function numero(x) {
    if (resultado.value == 0)
        resultado.value = "";
    resultado.value += x;
    almacenar = resultado.value;
}

// Eventos click



suma.addEventListener('click', function (e) {
    if (almacenar == 0) {
        window.alert("No hay un valor para calcular")
    }
    operadoa = Number(almacenar);
    operacion = '+';
    resultado.value = 0
    console.log(almacenar)
})

resta.addEventListener('click', function (e) {
    if (almacenar == 0) {
        window.alert("No hay un valor para calcular")
    }
    operadoa = Number(almacenar);
    operacion = '-';
    resultado.value = 0
    console.log(almacenar)
})

multiplicacion.addEventListener('click', function (e) {
    if (almacenar == 0) {
        window.alert("No hay un valor para calcular")
    }
    operadoa = Number(almacenar);
    operacion = '*';
    resultado.value = 0
    console.log(almacenar)
})

division.addEventListener('click', function (e) {
    if (almacenar == 0) {
        window.alert("No hay un valor para calcular")
    }
    operadoa = Number(almacenar);
    operacion = '/';
    resultado.value = 0
    console.log(almacenar)
})

porcentaje.addEventListener('click', function (e) {
    if (almacenar == 0) {
        window.alert("No hay un valor para calcular")
    }
    operadoa = Number(almacenar);
    operacion = '%';
    porcentaje = resultado.value / 100;
    resultado.value = porcentaje
    almacenar = porcentaje
    console.log(almacenar)
})

igual = document.getElementById('igual');
if (almacenar == 0) {
    window.alert("No hay un valor para calcular")
}
igual.addEventListener('click', function (e) {
    operadob = Number(resultado.value);
    console.log(almacenar)
    resolverSuma()
})



function resolverSuma() {
    if (operacion == "+") {
        resolver = operadoa + operadob
    } else if (operacion == "-") {
        resolver = operadoa - operadob
    } else if (operacion == "*") {
        resolver = operadoa * operadob
    } else if (operacion == "/") {
        resolver = operadoa / operadob
    } else if (operacion == "%") {
        resolver = operadoa / 100
    }

    resultado.value = resolver
    almacenar = resolver
}

// Funcion borrar uno a uno
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

// Funcion borrar todo
function a() {
    resultado.value = "0";
    operadoa = 0
    operadob = 0
}