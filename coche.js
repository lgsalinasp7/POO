class Coche{

    constructor(marca, modelo){
        this.marca = marca;
        this.modelo = modelo;
        this.velocidad = 0;
    }

    acelerar(aumento){
        this.velocidad += aumento;
        console.log(`${this.marca} ${this.modelo} ahora va a ${this.velocidad} km/h.`);
    }

    desacelerar(){
        this.velocidad -= 10;
      
       console.log(`${this.marca} ${this.modelo} desaceleró y ahora va a ${this.velocidad} km/h.`);
    }

    frenar(){
       
        this.velocidad -= 5;
        if (this.velocidad < 0){
            this.velocidad = 0;

        }

        console.log(`${this.marca} ${this.modelo} frenó  su velocidad anterior era: ${this.velocidadAnterior}  ahora va a ${this.velocidad} km/h.`);
    }

}

let miCoche = new Coche('Toyota', 'Corolla');
miCoche.acelerar(50);
