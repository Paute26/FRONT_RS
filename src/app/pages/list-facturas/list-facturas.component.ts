import { Component } from '@angular/core';
import { ClientesService } from 'src/app/clientes.service';
import { Factura } from 'src/app/domain/factura';

@Component({
  selector: 'app-list-facturas',
  templateUrl: './list-facturas.component.html',
  styleUrls: ['./list-facturas.component.scss']
})
export class ListFacturasComponent {

  facturas: Factura[] = [];


  constructor(private clientesService: ClientesService) {}

  ngOnInit(): void {
    this.clientesService.getFacturas().subscribe(resp => this.facturas = resp);
  }


}
