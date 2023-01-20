

let usuario = (prompt("Ingrese su usuario (DNI)"));
if (usuario == "") {
    alert("Usuario no ingresado")
}else{
    alert("Usuario " + usuario)

class Producto{
    constructor(id, categoria, marca, tipoDeProducto, precio){
        this.id = Number(id);
        this.categoria = categoria;
        this.marca = marca;
        this.tipoDeProducto = tipoDeProducto;
        this.precio = Number(precio);
    }
}

class Carrito {
    constructor(id, categoria, marca, tipoDeProducto, precio){
        this.id = Number(id);
        this.categoria = categoria;
        this.marca = marca;
        this.tipoDeProducto = tipoDeProducto;
        this.precio = Number(precio);
    }
}

const productosEnCarrito =[]
const productosEnGondola = []
productosEnGondola.push(new Producto(1,"fideos","lucchetti","tallarines",120));
productosEnGondola.push(new Producto(2,"fideos","lucchetti","monnitos",140));
productosEnGondola.push(new Producto(3,"lacteos","serenisima","leche",150));
productosEnGondola.push(new Producto(4,"lacteos","monica","manteca",80));
productosEnGondola.push(new Producto(5,"lacteos","danonino","yogur",135));
productosEnGondola.push(new Producto(6,"jugo","baggio","naranja",140));
productosEnGondola.push(new Producto(7,"huevos","granja","docena",120));
productosEnGondola.push(new Producto(8,"harina","molinos","0000",80));
productosEnGondola.push(new Producto(9,"lacteos","serenisima","queso",90));
productosEnGondola.push(new Producto(10,"azucar","ledezma","ensobres",100));

alert ("Recuerde el precio de los productos");
for (let i = 0; i < productosEnGondola.length; i++) {
    const identi = productosEnGondola[i].id;
    const categoria1 = productosEnGondola[i].categoria;
    const marca1 = productosEnGondola[i].marca;
    const tipoDeProducto1 = productosEnGondola[i].tipoDeProducto;
    const precios1 = productosEnGondola[i].precio;
    alert( "Identificador producto "+ identi + " " + categoria1 + " "+ marca1 +" "+ tipoDeProducto1+ " ,"+ precios1);
    
}

function traspazar (i,productosEnGondola[i]){
    const categoria2 = productosEnGondola[i].categoria;
    const marca2 = productosEnGondola[i].marca;
    const tipoDeProducto2 = productosEnGondola[i].tipoDeProducto;
    const precios2 = productosEnGondola[i].precio;


productosEnCarrito.push(new Producto(i,categoria2,marca2,tipoDeProducto2,precios2));
}


let  identificacion= 0 ,precio_total = 0;
let flag = "c"
function sumar(productosEnCarrito) {
    for (let index = 0; index < productosEnCarrito.length; index++) {
        precio_total = precio_total + productosEnCarrito[index].precio;
        
    }
    return precio_total
}
let i = 1
do{
    switch (i) {
        case 1:
            identificacion = Number(prompt("Ingrese el numero identificador del producto" + i))
            traspazar(identificacion,productosEnGondola[identificacion]);
            break;
        case 2:
            producto2 = Number(prompt("Ingrese el numero identificador del producto" + i))
            traspazar(identificacion,productosEnGondola);
            break;
        case 3:
            producto3 = Number(prompt("Ingrese el numero identificador del producto" + i))
            traspazar(identificacion,productosEnGondola);
            break;
        case 4:
            producto4 = Number(prompt("Ingrese el numero identificador del producto" + i))
            traspazar(identificacion,productosEnGondola);
            break;
        case 5:
            producto5 = Number(prompt("Ingrese el numero identificador del producto" + i))
            traspazar(identificacion,productosEnGondola);
            break;
        case 6:
            producto6 = Number(prompt("Ingrese el numero identificador del producto" + i))
            traspazar(identificacion,productosEnGondola);
            break;
        case 7:
            producto7 = Number(prompt("Ingrese el numero identificador del producto" + i))
            traspazar(identificacion,productosEnGondola);
            break;
        case 8:
            producto8 = Number(prompt("Ingrese el numero identificador del producto" + i))
            traspazar(identificacion,productosEnGondola);
            break;
        case 9:
            producto9 = Number(prompt("Ingrese el numero identificador del producto" + i))
            traspazar(identificacion,productosEnGondola);
            break;
        case 10:
            producto10 = Number(prompt("Ingrese el numero identificador del producto" + i))
            traspazar(identificacion,productosEnGondola);
            break;
        default:
            break;
    }
    
    flag = prompt("Si desea continuar precione c")

    i++

}while(i < 11 && flag == "c")
precio_total = sumar(productosEnCarrito)

alert("El total es: $"+ precio_total )
alert("Gracias por su compra")
console.log(usuario)
for (let index = 0; index < productosEnCarrito.length; index++) {
    console.log = productosEnCarrito[index];
    
}
console.log(precio_total)
}