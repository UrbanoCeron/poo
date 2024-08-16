// Clase base Vehiculo
class _Vehiculo {
    public marca: string;
    public modelo: string;

    constructor(marca: string, modelo: string) {
        this.marca = marca;
        this.modelo = modelo;
    }

    public arrancar(): void {
        console.log(`${this.marca} ${this.modelo} está arrancando.`);
    }

    public detener(): void {
        console.log(`${this.marca} ${this.modelo} se ha detenido.`);
    }
}

// Subclase Coche que hereda de _Vehiculo
class _Coche extends _Vehiculo {
    public numeroDePuertas: number;

    constructor(marca: string, modelo: string, numeroDePuertas: number) {
        super(marca, modelo);
        this.numeroDePuertas = numeroDePuertas;
    }

    public tocarBocina(): void {
        console.log(`${this.marca} ${this.modelo} está tocando la bocina.`);
    }
}

// Subclase Deportivo que hereda de _Coche
class _Deportivo extends _Coche {
    public esConvertible: boolean;

    constructor(marca: string, modelo: string, numeroDePuertas: number, esConvertible: boolean) {
        super(marca, modelo, numeroDePuertas);
        this.esConvertible = esConvertible;
    }

    public acelerar(): void {
        console.log(`${this.marca} ${this.modelo} está acelerando rápidamente.`);
    }
}

// Función que usa polimorfismo
function probarVehiculo(vehiculo: _Vehiculo): void {
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