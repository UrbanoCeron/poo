// interface IDocument {
//   data: string;
//   filename: string;

//   open(): void;
//   save(): void; // No todos los documentos necesitan guardar
// }

// class ReadOnlyDocument implements IDocument {
//   data: string = "";
//   filename: string = "";

//   open(): void {
//     // Lógica para abrir un documento
//   }

//   save(): void {
//     throw new Error("No se puede guardar un documento de solo lectura.");
//   }
// }

// class ProjectI {
//   documents: IDocument[] = [];

//   saveAll(): void {
//     for (const doc of this.documents) {
//       doc.save(); // Problema: los documentos de solo lectura no pueden guardar
//     }
//   }
// }

interface IOpenable {
  open(): void;
}

interface ISavable {
  save(): void;
}

class ReadOnlyDocument implements IOpenable {
  data: string = "";
  filename: string = "";

  open(): void {
    // Lógica para abrir un documento
  }
}

class WritableDocument implements IOpenable, ISavable {
  data: string = "";
  filename: string = "";

  open(): void {
    // Lógica para abrir un documento
  }

  save(): void {
    // Lógica para guardar un documento
  }
}

class ProjectI {
  writableDocs: ISavable[] = [];

  saveAll(): void {
    for (const doc of this.writableDocs) {
      doc.save();
    }
  }
}
