import { Cliente } from "./cliente";

export class Factura {
  numero?: string;
  cliente?: Cliente;
  total?: number;
  detalles?: DetallesFactura[];
}

export class DetallesFactura {
  nombre?: string;
  cantidad?: number;
  precio?: number;
}






