const ropa = [{ id: 1, precio: 93, nombre: "Hoodie", talle: "L"},
             {  id: 2, precio: 103, nombre: "Pant", talle: "M"},
             {  id: 3, precio: 35, nombre: "Gloves", talle: "M"},
             {  id: 4, precio: 18, nombre: "Socks", talle: "XS"},
             {  id: 5, precio: 650, nombre: "Cap", talle: "S"}];

for (const item of ropa) {
    console.log(item.id);
    console.log(item.precio);
    console.log(item.nombre);
    console.log(item.talle);
}

const precioEncontrado = ropa.filter(item => item.precio < parseInt(prompt("Valor menor a:")));

console.log(precioEncontrado);

ropa.sort(function (a, b) {
    if (a.precio > b.precio){
        return 1;
    }
    if (a.precio < b.precio) {
      return -1;
    }
    return 0;
  });

console.log(ropa);


