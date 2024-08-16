"use strict";
// Clase base Vehiculo
class _Vehiculo {
    constructor(marca, modelo) {
        this.marca = marca;
        this.modelo = modelo;
    }
    arrancar() {
        console.log(`${this.marca} ${this.modelo} está arrancando.`);
    }
    detener() {
        console.log(`${this.marca} ${this.modelo} se ha detenido.`);
    }
}
// Subclase Coche que hereda de _Vehiculo
class _Coche extends _Vehiculo {
    constructor(marca, modelo, numeroDePuertas) {
        super(marca, modelo);
        this.numeroDePuertas = numeroDePuertas;
    }
    tocarBocina() {
        console.log(`${this.marca} ${this.modelo} está tocando la bocina.`);
    }
}
// Subclase Deportivo que hereda de _Coche
class _Deportivo extends _Coche {
    constructor(marca, modelo, numeroDePuertas, esConvertible) {
        super(marca, modelo, numeroDePuertas);
        this.esConvertible = esConvertible;
    }
    acelerar() {
        console.log(`${this.marca} ${this.modelo} está acelerando rápidamente.`);
    }
}
// Función que usa polimorfismo
function probarVehiculo(vehiculo) {
    vehiculo.arrancar();
    vehiculo.detener();
}
// Ejemplo de uso
const _miVehiculo = new _Vehiculo("Toyota", "Corolla");
const _miCoche = new _Coche("Honda", "Civic", 4);
const _miDeportivo = new _Deportivo("Ferrari", "Spider", 2, true);
probarVehiculo(_miVehiculo);
probarVehiculo(_miCoche);
probarVehiculo(_miDeportivo);
