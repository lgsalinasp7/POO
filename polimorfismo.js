// class Animal {
//     constructor(nombre) {
//         this.nombre = nombre;
//     }
//     hacerSonido() {
//         console.log("Este animal hace un sonido 🦁");
//     }
// }

// class Perro extends Animal {
//     constructor(nombre) {
//        super(nombre);
//     }
//     hacerSonido() {
//         console.log(`Guau 🐕, mi nombre es ${this.nombre}`);
//     }
// }

// class Gato extends Animal {
//     hacerSonido() {
//         console.log("Miau Miau 🐱");
//     }
// }

// const animales = [new Animal(), new Perro('firulais'), new Gato()];

// animales.forEach((animal) => {
//     animal.hacerSonido();
// });

class MetodoPago {
    constructor(nombre) {
        this.nombre = nombre;
    }

    procesarPago(monto) {
        console.log(`Procesando pago de $${monto}`);
    }
}

class Tarjeta extends MetodoPago {

    constructor(nombre) {
        super(nombre);
    }
    procesarPago(monto) {
        console.log(`Pagando $${monto} con Tarjeta 💳`);
    }
}

class PayPal extends MetodoPago {
    procesarPago(monto) {
        console.log(`Pagando $${monto} con PayPal 🏦`);
    }
}

class Efectivo extends MetodoPago {
    procesarPago(monto) {
        console.log(`Pagando $${monto} en Efectivo 💵`);
    }
}

const pagos = [new Tarjeta(), new PayPal(), new Efectivo()];
pagos.forEach((pago) => {
    pago.procesarPago(100);
});