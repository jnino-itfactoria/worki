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

  export interface IGetEmployeeReq {
    Id: string;
  }
  export interface IGetEmployeeRes {
    Usuario: IUsuario;
    StatusCode: number;
    Message?: any;
  }
  
  export interface IUsuario {
    Id: string;
    PrimerNombre: string;
    SegundoNombre: string;
    DocumentoIdentidad: string;
    Edad: number;
    Salario: string;
  }