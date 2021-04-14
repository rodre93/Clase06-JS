const listaNombres = [];
let cantidad = parseInt(prompt("Ingrese la cantidad de nombres que quiera ver"));

for (let index = 0; index < cantidad; index++){

    let nombre = prompt("Agregar un nombre");

    listaNombres.push(nombre);
}

console.log("La longitud del array es de: " + listaNombres.length);
console.log("El array es: " + listaNombres.toString());

let primerElemento = listaNombres.slice(0,1);
let ultimoElemento = listaNombres.slice(listaNombres.length-1);

console.log("El primer elemento del array es: " + primerElemento);
console.log("El ultimo elemento del array es: " + ultimoElemento);

let nuevaLista = listaNombres.concat(primerElemento);

console.log("El nuevo array es " + nuevaLista.toString());

let index = 0;
let indexEnd = listaNombres.length-1;
do {
    const element = listaNombres[index];
    const elementEnd = listaNombres[indexEnd];
    
    index+=1;
    indexEnd-=1;

    console.log(element);
    console.log(elementEnd);

}while(index < listaNombres.length);

/**
do{
    let entrada = prompt("Ingrese nombre");
    listaNombres.push(entrada.toLocaleUpperCase());
    console.log(listaNombres.length);
}while(listaNombres.length != cantidad)

const nuevaLista = listaNombres.concat(["ANA", "EMA"]);

alert(nuevaLista.join("\a"));

 */