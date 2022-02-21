import { Component, OnInit, ComponentFactoryResolver, ViewContainerRef, ViewChild } from '@angular/core';
import { JsonService } from '../../../json.service';
import { TableComponent } from '../../../table/table.component';
import { Observable } from 'rxjs';
import { of } from 'rxjs';

@Component({
  selector: 'app-devoluciones-venta',
  templateUrl: './devoluciones-venta.page.html',
  styleUrls: ['./devoluciones-venta.page.scss'],
})
export class DevolucionesVentaPage implements OnInit {

  sucursales: any [];
  tableComponent = TableComponent;
  table: Observable<any[]>;
  tableTitle: any [];
  records: boolean;
  numberRecord: number;
  status: any [];
  load: boolean;

  constructor(public jsonService: JsonService,
              private componentFactoryResolver: ComponentFactoryResolver, private viewContainerRef: ViewContainerRef) {
              this.getSucursales();
              this.load = false;
}
ngOnInit() {  /* this.tableResults('99999', '', '');  */}

getSucursales() {
this.sucursales = this.jsonService.getSucursales();
}
tableResults( idsucursal: string, fechaDesde: string , fechaHasta: string ) {
this.load = true;
const formData = new FormData();
formData.append('idsucursal', idsucursal);
formData.append('fechaDesde', fechaDesde);
formData.append('fechaHasta', fechaHasta);
// tslint:disable-next-line: align
this.jsonService.postJson('https://app.networkingsas.com/app/auditoria/devolucionesVenta.php', formData).subscribe
    ((res: Array<string>) => {
    console.log(res);
    if (!res) {
    this.records = false;
    alert('No hay registros');
    return;
    }
    // tslint:disable-next-line: prefer-const
    let data = [];
    let i = 0 ;
    // tslint:disable-next-line: only-arrow-functions
    Object.keys(res).forEach(function(key) {
    data[i] = (res[key]);
    i++;
    });
    console.log(data.length);
    // tslint:disable-next-line: no-string-literal
    this.numberRecord = data.length;
    this.status = data[0];
    this.load = false;
    if ( this.status[0] ) {
      alert(this.status[1]);
      return;
    }
    this.records = true;
    this.tableTitle = data[1];
    this.table = of(data);
    });

}
}

