// class Perro {
//     constructor(nombre, raza) {
//         this.nombre = nombre;
//         this.raza = raza;
//     }

//     ladrar() {
//         console.log(`${this.nombre} está ladrando 🐶`);
//     }
// }

// class Gato {
//     constructor(nombre, raza) {
//         this.nombre = nombre;
//         this.raza = raza;
//     }

//     maullar() {
//         console.log(`${this.nombre} está maullando 🐱`);
//     }
// }

// class Animal {

//     constructor(nombre, raza) {
//         this.nombre = nombre;
//         this.raza = raza;
//     }

//     info() {
//         console.log(`Este es ${this.nombre}, un ${this.raza}.`);
//     }

// }

// class Perro extends Animal {


//     ladrar() {
//         console.log(`${this.nombre} está ladrando 🐶`);
//     }

// }

// class Gato extends Animal {

//     maullar() {
//         console.log(`${this.nombre} está maullando 🐱`);
//     }

// }
// const perro1 = new Perro('Firulais', 'Labrador');
// perro1.info();
// perro1.ladrar();

// class Vehiculo {
//     constructor(marca, modelo) {
//         this.marca = marca;
//         this.modelo = modelo;
//     }

//     mostrarInfo() {
//         console.log(`🚗 Vehículo: ${this.marca} - ${this.modelo}`);
//     }
// }


// class Auto extends Vehiculo {
//     constructor(marca, modelo, puertas) {
//         super(marca, modelo); 
//         this.puertas = puertas;
//     }

//     mostrarInfo() {
//         super.mostrarInfo(); // Llama al método de la clase padre
//         console.log(`Tiene ${this.puertas} puertas 🚘`);
//     }
// }


// const miAuto = new Auto("Toyota", "Corolla", 4);
// miAuto.mostrarInfo();

class Empleado {
    constructor(nombre, sueldo) {
        this.nombre = nombre;
        this.sueldo = sueldo;
    }

    mostrarInfo() {
        console.log(`Empleado: ${this.nombre} y mi sueldo es: ${this.sueldo}`);
    }
}



class Programador extends Empleado{
    constructor(nombre, salario, lenguaje) {
        super(nombre, salario);
        this.lenguaje = lenguaje;
    }

    mostrarInfo() {
        super.mostrarInfo();
        console.log(`💻 Lenguaje es: ${this.lenguaje}`);
    }

}

class Diseñador extends Empleado {
    constructor(nombre, salario, herramienta) {
        super(nombre, salario);
        this.herramienta = herramienta;
    }

    mostrarInfo() {
        super.mostrarInfo();
        console.log(`🎨 Herramienta que utilizo: ${this.herramienta}`);
    }
}

const dev = new Programador('Juan', 1000, 'JavaScript');
const dis = new Diseñador('Ana', 1500, 'Figma');

dev.mostrarInfo();
dis.mostrarInfo();