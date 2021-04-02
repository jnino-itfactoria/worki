export interface IProfileRes {
    Items: Item[];
    Count: number;
    ScannedCount: number;
  }
  
  export interface Item {
    Cedula: string;
    Imagen: string;
    Nombre: string;
    Salario: string;
    Dirección: string;
    Id: string;
    Teléfono: string;
  }