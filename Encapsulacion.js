class usuario{
    //encapsulamiento
    #edad;

    constructor(nombre, apellido, edad){
        this.nombre = nombre;
        this.apellido = apellido;
        this.#edad = edad;
    }

    saludar(){
        console.log(`Hola soy ${this.nombre} ${this.apellido} y tengo ${this.#edad} años`);
    }

    getEdad(){
        return this.#edad;
    }

    setEdad(nuevaEdad){
        if(nuevaEdad < 0){
            console.error('No se puede tener una edad negativa');
            return;
        }
        this.#edad = nuevaEdad;
    }

  
}

const user = new usuario('Juan', 'Perez', 30);
user.apellido = 'Lopez';
user.setEdad(15);
user.saludar();


