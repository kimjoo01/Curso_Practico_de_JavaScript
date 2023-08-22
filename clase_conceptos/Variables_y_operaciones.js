var nombre;
var apellido;
var usuario_platzi;
var edad = null;
var correo_electronico;
var mayor_edad;
var dinero_ahorrado = null;
var deudas = null;
var dinero_real;

nombre = prompt("Ingrese su nombre: ");
apellido = prompt("Ingrese su apellido: ");
dinero_ahorrado = prompt("Cuanto dinero tiene ahorrado actualmente: ");
deudas = prompt("cual es la suma de sus deudas: ");

dinero_real = dinero_ahorrado - deudas;

if (dinero_real > 0){
    console.log("Bienvenido " + nombre + " " + apellido + " usted tiene un saldo a favor de: " + dinero_real);
} else if (dinero_real == 0){
    console.log("Bienvenido " + nombre + " " + apellido + " usted tiene un saldo neutro");
} else {
    console.log("Bienvenido " + nombre + " " + apellido + " usted tiene un saldo en contra de: " + dinero_real);
}