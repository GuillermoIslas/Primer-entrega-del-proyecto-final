
const productos = [
    {nombre: "paneles solares", precio:1700},
    {nombre: "colector solar", precio:1200},
    {nombre: "bomba de calor", precio:1500},
    {nombre: "aislamiento térmico", precio:4000},
    {nombre: "ventanas de aerogel", precio:5000},
];

let carrito = []

let seleccion = prompt("¿Desea instalar alguno de estos productos?")
while(seleccion != "si" && seleccion != "no"){
    alert("Por favor ingresa sí o no")
    seleccion = prompt("Hola, desea comprar algo? Sí o no")
}

if(seleccion == "si"){
    alert("Nuestra lista de productos")
    let todoslosProductos = productos.map((producto) => producto.nombre + " " + producto.precio + "$");
    alert(todoslosProductos.join(" - "))
}else if (seleccion == "no"){
    alert("Gracias por venir, hasta pronto")
}

while (seleccion != "no"){
    let producto = prompt("Agrega un producto a tu carrito")
    let precio = 0

    if (producto == "paneles solares" || producto == "colector solar" || producto == "bomba de calor" || 
    producto == "aislamiento térmico" || producto == "ventanas de aerogel"){
        switch (producto){
            case "paneles solares":
                precio = 1700;
                break;
            case "colectores solares":
                precio = 1200;
                break;
            case "bomba de calor":
                precio = 1500;
                break;
            case "aislamiento térmico":
                precio = 4000;
                break;
            case "ventanas de aerogel":
                precio = 5000;
                break;
            default:
                break;
        }
        let unidades = parseInt(prompt("¿Cuantas unidades quiere llevar?"))

        carrito.push({producto, unidades, precio})
        console.log(carrito)
    } else {
        alert("No tenemos ese producto")
    }
    seleccion = prompt ("¿desea seguir comprando?")

    while (seleccion === "no"){
    alert("Gracias por la compra, hasta pronto")
    carrito.forEach((carritoFinal) => {
        console.log(`producto: ${carritoFinal.producto}, unidades: ${carritoFinal.unidades},
        total a pagar por producto ${carritoFinal.unidades * carritoFinal.precio}`)
    })
    break;
}
}
