let producto = parseInt(prompt('Selecciona el producto que deseas comprar: 1_Zapatillas - 2_Remeras - 3_Pantalon - 4_Campera'))

let totalCompra = 0
let seguirComprando = true
let decision
while (seguirComprando === true) {
    if (producto === 1) {
        totalCompra = totalCompra + 23000
    } else if (producto === 2) {
        totalCompra = totalCompra + 9000
    } else if (producto === 3) {
        totalCompra = totalCompra + 15000
    } else if (producto === 4) {
        totalCompra = totalCompra + 33000
    } else {
        producto = parseInt(prompt('Selecciona el producto que deseas comprar: 1_Zapatillas - 2_Remeras - 3_Pantalon - 4_Campera'))
        continue
    }

    decision = parseInt(prompt('Quieres seguir comprando? 1.Si - 2.No'))
    if (decision === 1) {
        producto = parseInt(prompt('Selecciona el producto que deseas comprar: 1_Zapatillas - 2_Remeras - 3_Pantalon - 4_Campera'))
    } else {
        seguirComprando = false
    }
}
alert(`El total de tu compra es ${totalCompra}`)
