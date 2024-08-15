// Superclase Animal
class Animal {
  public name: string;
  public sex: string;
  public age: number;
  public weight: number;
  public color: string;

  constructor(
    name: string,
    sex: string,
    age: number,
    weight: number,
    color: string
  ) {
    this.name = name;
    this.sex = sex;
    this.age = age;
    this.weight = weight;
    this.color = color;
  }

  public breathe(): void {
    console.log(`${this.name} está respirando.`);
  }

  public eat(food: string): void {
    console.log(`${this.name} está comiendo ${food}.`);
  }

  public run(destination: string): void {
    console.log(`${this.name} está corriendo hacia ${destination}.`);
  }

  public sleep(hours: number): void {
    console.log(`${this.name} está durmiendo por ${hours} horas.`);
  }
}

class Dog extends Animal {
  public bestFriend: string;

  constructor(
    name: string,
    sex: string,
    age: number,
    weight: number,
    color: string,
    bestFriend: string
  ) {
    super(name, sex, age, weight, color);
    this.bestFriend = bestFriend;
  }

  public bark(): void {
    console.log(`${this.name} dice: ¡Guau!`);
  }
}

// Subclase Cat
class _Cat extends Animal {
  public isNasty: boolean;

  constructor(
    name: string,
    sex: string,
    age: number,
    weight: number,
    color: string,
    isNasty: boolean
  ) {
    super(name, sex, age, weight, color);
    this.isNasty = isNasty;
  }

  public meow(): void {
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
