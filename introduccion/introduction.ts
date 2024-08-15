// Clase que representa un Gato
class Cat {
  // Campos públicos (estado)
  public name: string;
  public gender: string;
  public age: number;
  public weight: number;
  public color: string;
  public texture?: string;

  // Constructor para inicializar los campos del gato
  constructor(
    name: string,
    gender: string,
    age: number,
    weight: number,
    color: string,
    texture?: string
  ) {
    this.name = name;
    this.gender = gender;
    this.age = age;
    this.weight = weight;
    this.color = color;
    this.texture = texture;
  }

  // Métodos públicos (comportamiento)

  // Método para simular la respiración del gato
  public breathe(): void {
    console.log(`${this.name} está respirando.`);
  }

  // Método para simular que el gato está comiendo
  public eat(food: string): void {
    console.log(`${this.name} está comiendo ${food}.`);
  }

  // Método para simular que el gato está corriendo
  public run(destination: string): void {
    console.log(`${this.name} está corriendo hacia ${destination}.`);
  }

  // Método para simular que el gato está durmiendo
  public sleep(hours: number): void {
    console.log(`${this.name} está durmiendo por ${hours} horas.`);
  }

  // Método para simular el maullido del gato
  public meow(): void {
    console.log(`${this.name} dice: ¡Miau!`);
  }

  // Método para ver su informacion
  public displayInfo(): void {
    console.log(
      `Nombre: ${this.name}, Sexo: ${this.gender}, Edad: ${this.age}, Peso: ${this.weight}, Color: ${this.color}, Textura: ${this.texture}`
    );
  }
}

// Ejemplo de uso
const myCat = new Cat("Whiskers", "Hembra", 3, 4.5, "Gris");

myCat.breathe(); // Salida: Whiskers está respirando.
myCat.eat("pescado"); // Salida: Whiskers está comiendo pescado.
myCat.run("el jardín"); // Salida: Whiskers está corriendo hacia el jardín.
myCat.sleep(5); // Salida: Whiskers está durmiendo por 5 horas.
myCat.meow();
