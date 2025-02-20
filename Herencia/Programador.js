import Empleado from '../Polimorfismo/empleado.js';

class Programador extends Empleado{
    constructor(nombre, salario, lenguaje) {
        super(nombre, salario);
        this.lenguaje = lenguaje;
    }



}