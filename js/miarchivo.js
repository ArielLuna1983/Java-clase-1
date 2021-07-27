let nombre = prompt("Ingresa Tu Nombre");
let password = prompt("Ingresa tu Contraseña");
let elegir = Number(prompt("Por favor elija un número"));
let saludo = prompt("Hola");

if (elegir >= 1000) {
    alert("superas los 1000");
} else if (elegir >= 10 && elegir <= 50) {
    alert("de 10 a 50")
}
if (saludo == "Hola") {
    console.log("Bienvenido " + nombre);
    alert("Bienvenido " + nombre)
} else {
    alert("Saluda como corresponde, " + nombre);
}