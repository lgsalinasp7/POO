 class Mascota{

    

    constructor(nombre, edad, tipo){
        this.nombre = nombre;
        this.edad = edad;
        this.tipo = tipo;
    }

 
    saludar(){
        console.log(`Mi Nombre es : ${this.nombre}, y tengo  ${this.edad} años,  y soy un: ${this.tipo}`);
    }

}


let micoche = new Mascota('Milo', 2, 'Perro');

micoche.saludar();