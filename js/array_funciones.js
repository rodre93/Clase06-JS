let cantidad = parseInt(prompt("Definir cantidad de numeros"));

const miArray = [];

for (let index = 0; index < cantidad; index++) {
    let numero = parseInt(prompt("Ingrese numero"));

    console.log(miArray.push(numero));
        
}

let numeroAbuscar= parseInt(prompt("Numero a buscar mayores a: "));

let miFuncion = (x) => x * 2;

console.log(miFuncion(200));

let miFuncionmayor10 = (x) => x > 10;

console.log(miFuncionmayor10(5));

let numerosEncontrados = miArray.find( x => x > numeroAbuscar );

console.log(numerosEncontrados);