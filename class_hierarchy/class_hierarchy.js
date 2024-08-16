"use strict";
// Superclase Animal
class Animal {
    constructor(name, sex, age, weight, color) {
        this.name = name;
        this.sex = sex;
        this.age = age;
        this.weight = weight;
        this.color = color;
    }
    breathe() {
        console.log(`${this.name} está respirando.`);
    }
    eat(food) {
        console.log(`${this.name} está comiendo ${food}.`);
    }
    run(destination) {
        console.log(`${this.name} está corriendo hacia ${destination}.`);
    }
    sleep(hours) {
        console.log(`${this.name} está durmiendo por ${hours} horas.`);
    }
}
class Dog extends Animal {
    constructor(name, sex, age, weight, color, bestFriend) {
        super(name, sex, age, weight, color);
        this.bestFriend = bestFriend;
    }
    bark() {
        console.log(`${this.name} dice: ¡Guau!`);
    }
}
// Subclase Cat
class _Cat extends Animal {
    constructor(name, sex, age, weight, color, isNasty) {
        super(name, sex, age, weight, color);
        this.isNasty = isNasty;
    }
    meow() {
        console.log(`${this.name} dice: ¡Miau!`);
    }
}
// Ejemplo de uso
const perro = new Dog("Rex", "macho", 5, 20, "negro", "Juan");
perro.bark(); // Salida: Rex dice: ¡Guau!
perro.breathe(); //Salida: Rex está respirando.
const gato = new _Cat("Óscar", "macho", 3, 7, "marrón", true);
gato.meow(); // Salida: Óscar dice: ¡Miau!
gato.run("casa"); // Salida; Óscar está corriendo hacia casa.
