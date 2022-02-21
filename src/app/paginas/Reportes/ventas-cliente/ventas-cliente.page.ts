import { Component, OnInit, ComponentFactoryResolver, ViewContainerRef, ViewChild } from '@angular/core';
import { JsonService } from '../../../json.service';
import { TableComponent } from '../../../table/table.component';
import { Observable } from 'rxjs';
import { of } from 'rxjs'; 

@Component({
  selector: 'app-ventas-cliente',
  templateUrl: './ventas-cliente.page.html',
  styleUrls: ['./ventas-cliente.page.scss'],
})
export class VentasClientePage implements OnInit {

  sucursales: any [];
  tableComponent = TableComponent;
  table: Observable<any[]>;
  tableTitle: any [];
  records: boolean;
  numberRecord: number;
  status: any [];
  categorias: any [];
  load: boolean;

constructor(public jsonService: JsonService,
            private componentFactoryResolver: ComponentFactoryResolver, private viewContainerRef: ViewContainerRef) {
              this.getSucursales(); this.getCategoria(); this.load = false;
}
ngOnInit() { }

    getSucursales() {
      this.sucursales = this.jsonService.getSucursales();
    }
    getCategoria() {
      this.categorias = this.jsonService.getCategoria();
    }
  tableResults( idsucursal: string, fechaDesde: string , fechaHasta: string, idcategoria: string ) {
    this.records = false;
    this.load = true;
    const formData = new FormData();
    formData.append('idsucursal', idsucursal);
    formData.append('fechaDesde', fechaDesde);
    formData.append('fechaHasta', fechaHasta);
    formData.append('idcategoria', idcategoria);
    this.jsonService.postJson('https://app.networkingsas.com/app/reportes/ventasCliente.php', formData).subscribe
    ((res: Array<string>) => {
      console.log(res);
      if (!res) {
        this.records = false;
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
