import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { enviroment } from 'src/enviroment/enviroment';
import { Cliente } from './domain/cliente';
import { Factura } from './domain/factura';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  constructor(private http: HttpClient) { }

  getClientes() {
    let url = enviroment.PATH_WS + "/clientes/list";
    return this.http.get<any>(url);
  }

  saveCliente(cliente: Cliente) {
    let url = enviroment.PATH_WS + "/clientes";
    return this.http.post<any>(url, cliente);
  }

  getClienteById(id: number) {
    let url = enviroment.PATH_WS + "/clientes?codigo="+id;
    return this.http.get<any>(url);
  }

  saveFactura(factura: Factura) {
    let url = enviroment.PATH_WS + "/facturas";
    return this.http.post<any>(url, factura);
  }

  getFacturas(): Observable<Factura[]> {
    let url = enviroment.PATH_WS + "/facturas/list";
    return this.http.get<Factura[]>(url);
  }

}
