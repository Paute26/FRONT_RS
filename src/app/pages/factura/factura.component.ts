import { Component } from '@angular/core';
import { ClientesService } from 'src/app/clientes.service';
import { Cliente } from 'src/app/domain/cliente';
import { Factura, DetallesFactura } from '../../domain/factura';

@Component({
  selector: 'app-factura',
  templateUrl: './factura.component.html',
  styleUrls: ['./factura.component.scss']
})
export class FacturaComponent {
  clientes: any;

  client?: Cliente;

  factura: Factura = new Factura();
  detallesFactura: DetallesFactura = new DetallesFactura();
  detallesFacturas: DetallesFactura[] = [];

  constructor(private clientesService: ClientesService) {}

  ngOnInit(): void {
    this.clientes = this.clientesService.getClientes();
    this.detallesFacturas = [];
    this.factura = new Factura();
  }

  selectClient(idCliente: number): void {
    this.clientesService.getClienteById(idCliente).subscribe(resp => this.factura.cliente  = resp);
  }

  agregarDetalle() {
    //this.factura.cliente = this.client;
    this.detallesFacturas.push(this.detallesFactura);
    this.factura.detalles = this.detallesFacturas;
    //console.log(this.factura.detallesFactura![0]);
    this.detallesFactura = new DetallesFactura();

  }

  guardar() {
    console.log(this.factura);
    this.clientesService.saveFactura(this.factura).subscribe(data => {
      console.log(data);

      if(data.codigo == 1)
        this.ngOnInit();
      else
        alert('Error al insertar' + data.mensaje);

    });


  }

}
