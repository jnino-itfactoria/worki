export interface IEmployeeReq {
    PrimerNombre: string;
    SegundoNombre: string;
    DocumentoIdentidad: string;
    Edad: number;
    Salario: string;
}

export interface IEmployeeRes {
    StatusCode: number;
    Id: string;
    Message?: any;
  }