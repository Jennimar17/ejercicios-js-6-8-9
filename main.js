///ejercicio 6

const grita = (str) => {
    return `¡${str}!`
}

console.log(grita("Jennnyyy"))



//ejercicio 8

const saludar = (apodoDeUsuario, saludarAlUsuario) => {
    let apodo = prompt("diga su apodo")
    let saludo = `¡Hola ${apodo} Gusto de conocerte!`
    return saludo
}

alert(saludar())

//ejercicio 9

const saludarGritando = (nombre, apellido) => {
    let nombreDeUsuario = prompt("Decime tu nombre")
    let apellidoDeUsuario = prompt("Decime tu apellido")
    let saludo = `Hola ${nombreDeUsuario} ${apellidoDeUsuario} Gusto de Conocerte`
    return `¡${saludo}!`
}

alert(saludarGritando())

//ejercicio 18

const generarEmail = (apodoDelUsuario, correo) => {
    let apodo = "jennimar17"
    let dominio = "gmail.com"
    return `Tu nuevo correo es: ${apodo}@${dominio}`

}

console.log(generarEmail())