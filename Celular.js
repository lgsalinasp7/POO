class Celular {
    constructor(marca, modelo, bateria) {
      this.marca = marca;
      this.modelo = modelo;
      this.bateria = bateria;
    }
  
    usarApp(minutos) {
      const consumo = minutos * 2;
      this.bateria = Math.max(this.bateria - consumo, 0);
      console.log(`Has usado la app por ${minutos} minutos. Batería restante: ${this.bateria}%`);
    }
  
    cargarBateria(porcentaje) {
      this.bateria = Math.min(this.bateria + porcentaje, 100);
      console.log(`Has cargado la batería en ${porcentaje}%. Batería actual: ${this.bateria}%`);
    }
  }
  
  
  const miCelular = new Celular("Samsung", "Galaxy S21", 100);
  
  
  miCelular.usarApp(10);
  
  
  miCelular.cargarBateria(15);minutos