// class Auto {
//     constructor(marca, modelo) {
//         this.marca = marca;
//         this.modelo = modelo;
//         this.motorEncendido = false;
//     }

//     verificarAceite() {
//         console.log("Verificando aceite... ✅");
//     }

//     verificarBateria() {
//         console.log("Verificando batería... 🔋");
//     }

//     verificarFrenos() {
//         console.log("Verificando frenos... 🚗💨");
//     }

//     encender(){
//         this.motorEncendido = true;
//         this.verificarAceite();
//         this.verificarBateria();
//         this.verificarFrenos();
//         console.log(`El ${this.marca} ${this.modelo} está encendido 🚀`);
//     }

// }

// const auto = new Auto("Toyota", "Corolla");
// auto.encender();

// class Vehiculo {
//     constructor(marca, modelo) {
//         this.marca = marca;
//         this.modelo = modelo;
//         this.motorEncendido = false;
//     }

//     encender() {
//         this.motorEncendido = true;
//         console.log(`${this.marca} ${this.modelo} está encendido 🚀`);
//     }
// }


// class Auto extends Vehiculo {

//     conducir() {
//         if (this.motorEncendido) {
//             console.log(`Conduciendo el ${this.marca} ${this.modelo} 🚗💨`);
//         } else {
//             console.log("Primero enciende el auto 🔑");
//         }
//     }
// }

// const auto = new Auto("Toyota", "Corolla");
// auto.encender();
// // auto.conducir();

// class Usuario {
//     constructor(nombre, password) {
//         this.nombre = nombre;
//         this.password  = password;
//     }

//     #validarPassword(password) {
//         return this.password === password;
//     }

//     iniciarSesion(password) {
//         if(this.#validarPassword(password)) {
//             console.log(`Bienvenido ${this.nombre}`);
//         } else {
//             console.log("Password incorrecto");
//         }
//     }
  
// }

// const usuario = new Usuario("Juan", "1234");
// usuario.iniciarSesion("1234");
// usuario.iniciarSesion("0000");

class Cajero {
    constructor(saldo) {
        this.saldo = saldo;
    }
    verificarSaldo(monto) {
        return this.saldo >= monto;//falso o verdade
    }
    restarSaldo(monto) {
        this.saldo -= monto;
    }
    entregarDinero(monto) {
        console.log(`Aquí tienes $${monto} 💵`);
    }
    retirarDinero(monto) {
        if (this.verificarSaldo(monto)) {
            this.restarSaldo(monto);
            this.entregarDinero(monto);
        } else {
            console.log("Saldo insuficiente ❌");
        }
    }
}
const  miCajero = new Cajero(1000);
miCajero.retirarDinero(500);