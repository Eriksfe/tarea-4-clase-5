//TAREA: En otro archivo distinto,
// Crear una lista de <ol> y <li> que contengan sólo números.
// Convertir esos números a un array y:
// 1. calcular el promedio y mostrarlo en un <em> pre-creado con el texto "El promedio es..."
// 2. obtener el número más pequeño y mostrarlo en un <em> pre-creado con el texto "El número más pequeño es..."
// 3. obtener el número más grande y mostrarlo en un <em> pre-creado con el texto "El número más grande es..."
// 4. obtener el número que más se repite y mostrarlo en un <em> pre-creado con el texto "El número más frecuente es..."


const numerosLista = document.querySelectorAll("input");
const $botonIngresar = document.querySelector(".boton");
const arrayNumeros = [];

const pasaNumerosAlArray = function(){
    for(let i=0; i<numerosLista.length; i++){
    arrayNumeros.push(numerosLista[i].value);
    }
}

const calculaPromedio = function(){
    let suma = 0;
    let promedio;
    for(let i=0; i<numerosLista.length; i++){
        suma = suma + Number(numerosLista[i].value);
    }
    promedio = suma / numerosLista.length;
    muestraNroPromedio.innerText = `El promedio es ${promedio}.`;
}

const obtieneNumeroMasChico = function(){
    numeroMasChico = Math.min(...arrayNumeros);
    muestraNroMasChico.innerText = `El numero más chico es ${numeroMasChico}.`;
}

const obtieneNumeroMasGrande = function(){
    numeroMasGrande = Math.max(...arrayNumeros);
    muestraNroMasGrande.innerText = `El numero más grande es ${numeroMasGrande}.`;
}

const numeroMasRepetido = function(){
    let maximaFrecuencia = 1; //frecuencia por default es 1 (todos los nros se repiten una vez)
    let frecuenciaNumero = 0;
    let numeroMasRepetido;
    for(let i=0; i<arrayNumeros.length; i++) {
        for(let j=i; j<arrayNumeros.length; j++) {
            if(arrayNumeros[i] === arrayNumeros[j]) {
                frecuenciaNumero++
            } if(maximaFrecuencia < frecuenciaNumero) {
                maximaFrecuencia = frecuenciaNumero;
                numeroMasRepetido = arrayNumeros[i];
            }
        }
        frecuenciaNumero = 0;
    }
    numeroMasFrecuente.innerText = `El número que más se repite es el ${numeroMasRepetido}.`;
}

let muestraNroPromedio = document.querySelector(".promedio");
let muestraNroMasChico = document.querySelector(".numero-mas-chico");
let muestraNroMasGrande = document.querySelector(".numero-mas-grande");
let numeroMasFrecuente = document.querySelector(".numero-mas-repetido");


$botonIngresar.onclick = function(){
    pasaNumerosAlArray();
    calculaPromedio();
    obtieneNumeroMasChico();
    obtieneNumeroMasGrande();
    numeroMasRepetido();
    return false;
}

