"use strict";
// interface IDocument {
//   data: string;
//   filename: string;
class ReadOnlyDocument {
    constructor() {
        this.data = "";
        this.filename = "";
    }
    open() {
        // Lógica para abrir un documento
    }
}
class WritableDocument {
    constructor() {
        this.data = "";
        this.filename = "";
    }
    open() {
        // Lógica para abrir un documento
    }
    save() {
        // Lógica para guardar un documento
    }
}
class ProjectI {
    constructor() {
        this.writableDocs = [];
    }
    saveAll() {
        for (const doc of this.writableDocs) {
            doc.save();
        }
    }
}
