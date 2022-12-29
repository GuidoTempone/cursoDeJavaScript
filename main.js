

let usuario = (prompt("Ingrese su usuario (DNI)"));
if (usuario == "") {
    alert("Usuario no ingresado")
}else{
    alert("Usuario " + usuario)
let producto1 = 0 , producto2 = 0 , producto3 = 0 , producto4 = 0 , producto5 = 0 , producto6 = 0, producto7 = 0, producto8 = 0, producto9 = 0 , producto10 = 0 , precio_total = 0
let flag = "c"
function sumar(producto1,producto2,producto3,producto4,producto5,producto6,producto7,producto8,producto9,producto10) {
    precio_total = producto1+producto2+producto3+producto4+producto5+producto6+producto7+producto8+producto9+producto10
    return precio_total
}
let i = 1
do{
    switch (i) {
        case 1:
            producto1 = Number(prompt("Ingrese el precio del producto n°" + i))
            break;
        case 2:
            producto2 = Number(prompt("Ingrese el precio del producto n°" + i))
            break;
        case 3:
            producto3 = Number(prompt("Ingrese el precio del producto n°" + i))
            break;
        case 4:
            producto4 = Number(prompt("Ingrese el precio del producto n°" + i))
            break;
        case 5:
            producto5 = Number(prompt("Ingrese el precio del producto n°" + i))
            break;
        case 6:
            producto6 = Number(prompt("Ingrese el precio del producto n°" + i))
            break;
        case 7:
            producto7 = Number(prompt("Ingrese el precio del producto n°" + i))
            break;
        case 8:
            producto8 = Number(prompt("Ingrese el precio del producto n°" + i))
            break;
        case 9:
            producto9 = Number(prompt("Ingrese el precio del producto n°" + i))
            break;
        case 10:
            producto10 = Number(prompt("Ingrese el precio del producto n°" + i))
            break;
        default:
            break;
    }
    
    flag = prompt("Si desea continuar precione c")

    i++

}while(i < 11 && flag == "c")
precio_total = sumar(producto1,producto2,producto3,producto4,producto5,producto6,producto7,producto8,producto9,producto10)

alert("El total es: $"+ precio_total )
alert("Gracias por su compra")
console.log(usuario)
console.log(producto1)
console.log(producto2)
console.log(producto3)
console.log(producto4)
console.log(producto5)
console.log(producto6)
console.log(producto7)
console.log(producto8)
console.log(producto9)
console.log(producto10)
console.log(precio_total)
}