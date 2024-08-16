class DocumentL {
  data: string = "";
  filename: string = "";

  open(): void {
    // Lógica para abrir el documento
  }

  save(): void {
    // Lógica para guardar el documento
    throw new Error("No se puede guardar un documento de solo lectura.");
  }
}

class Project {
  documents: DocumentL[] = [];

  saveAll(): void {
    for (const doc of this.documents) {
      doc.save(); // Aquí podría lanzarse una excepción si un documento no es guardable.
    }
  }
}

// Aplicando principio
// class DocumentL {
//   data: string = "";
//   filename: string = "";

//   constructor() {}

//   open(): void {
//     // Lógica para abrir el documento
//   }
// }

// class WritableDocument extends DocumentL {
//   save(): void {
//     // Lógica para guardar el documento
//   }
// }

// class Project {
//   writableDocs: WritableDocument[] = [];

//   saveAll(): void {
//     for (const doc of this.writableDocs) {
//       doc.save();
//     }
//   }
// }
