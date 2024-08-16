"use strict";
class MySQLDatabase {
    insert() {
        // Lógica para insertar en la base de datos MySQL
    }
    update() {
        // Lógica para actualizar en la base de datos MySQL
    }
    delete() {
        // Lógica para eliminar en la base de datos MySQL
    }
}
class BudgetReport {
    constructor(database) {
        this.database = database;
    }
    open(date) {
        // Lógica para abrir el reporte
    }
    save() {
        this.database.insert();
    }
}
// Aplicando el principio
// interface Database {
//   insert(): void;
//   update(): void;
//   delete(): void;
// }
// class MySQLDatabase implements Database {
//   insert(): void {
//     // Lógica para insertar en MySQL
//   }
//   update(): void {
//     // Lógica para actualizar en MySQL
//   }
//   delete(): void {
//     // Lógica para eliminar en MySQL
//   }
// }
// class MongoDB implements Database {
//   insert(): void {
//     // Lógica para insertar en MongoDB
//   }
//   update(): void {
//     // Lógica para actualizar en MongoDB
//   }
//   delete(): void {
//     // Lógica para eliminar en MongoDB
//   }
// }
// class BudgetReport {
//   private database: Database;
//   constructor(database: Database) {
//     this.database = database;
//   }
//   open(date: Date): void {
//     // Lógica para abrir el reporte
//   }
//   save(): void {
//     this.database.insert();
//   }
// }
