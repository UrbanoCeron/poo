"use strict";
// Clase que representa un Gato
class Cat {
    // Constructor para inicializar los campos del gato
    constructor(name, gender, age, weight, color, texture) {
        this.name = name;
        this.gender = gender;
        this.age = age;
        this.weight = weight;
        this.color = color;
        this.texture = texture;
    }
    // Métodos públicos (comportamiento)
    // Método para simular la respiración del gato
    breathe() {
        console.log(`${this.name} está respirando.`);
    }
    // Método para simular que el gato está comiendo
    eat(food) {
        console.log(`${this.name} está comiendo ${food}.`);
    }
    // Método para simular que el gato está corriendo
    run(destination) {
        console.log(`${this.name} está corriendo hacia ${destination}.`);
    }
    // Método para simular que el gato está durmiendo
    sleep(hours) {
        console.log(`${this.name} está durmiendo por ${hours} horas.`);
    }
    // Método para simular el maullido del gato
    meow() {
        console.log(`${this.name} dice: ¡Miau!`);
    }
    // Método para ver su informacion
    displayInfo() {
        console.log(`Nombre: ${this.name}, Sexo: ${this.gender}, Edad: ${this.age}, Peso: ${this.weight}, Color: ${this.color}, Textura: ${this.texture}`);
    }
}
// Ejemplo de uso
const myCat = new Cat("Whiskers", "Hembra", 3, 4.5, "Gris");
myCat.breathe(); // Salida: Whiskers está respirando.
myCat.eat("pescado"); // Salida: Whiskers está comiendo pescado.
myCat.run("el jardín"); // Salida: Whiskers está corriendo hacia el jardín.
myCat.sleep(5); // Salida: Whiskers está durmiendo por 5 horas.
myCat.meow();
