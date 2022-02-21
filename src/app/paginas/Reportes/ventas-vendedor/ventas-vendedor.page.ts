import { Component, OnInit, ComponentFactoryResolver, ViewContainerRef, ViewChild } from '@angular/core';
import { JsonService } from '../../../json.service';
import { TableComponent } from '../../../table/table.component';
import { Observable } from 'rxjs';
import { of } from 'rxjs';

@Component({
  selector: 'app-ventas-vendedor',
  templateUrl: './ventas-vendedor.page.html',
  styleUrls: ['./ventas-vendedor.page.scss'],
})
export class VentasVendedorPage implements OnInit {

  sucursales: any [];
  tableComponent = TableComponent;
  table: Observable<any[]>; 
  tableTitle: any [];
  records: boolean;
  table2: Observable<any[]>;
  tableTitle2: any [];
  records2: boolean;
  numberRecord: number;
  numberRecord2: number;
  status: any [];

constructor(public jsonService: JsonService,
            private componentFactoryResolver: ComponentFactoryResolver, private viewContainerRef: ViewContainerRef) {
              this.getSucursales(); this.records = true;
}
ngOnInit() { }

    getSucursales() {
      this.sucursales = this.jsonService.getSucursales();
    }
  tableResults( idsucursal: string, fechaDesde: string , fechaHasta: string ) {
    this.records = false;
    const formData = new FormData();
    formData.append('idsucursal', idsucursal);
    formData.append('fechaDesde', fechaDesde);
    formData.append('fechaHasta', fechaHasta);
    this.jsonService.postJson('https://app.networkingsas.com/app/reportes/ventasVendedor.php', formData).subscribe
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
        /* console.log(res[key]); */
        data[i] = (res[key]);
        i++;
      });
      console.log(data.length);
      // tslint:disable-next-line: no-string-literal
      this.numberRecord = data.length;
      this.status = data[0];
      if ( this.status[0] ) {
        alert(this.status[1]);
        return;
      }
      this.records = true;
      this.tableTitle = data[1];
      this.table = of(data);
     });

    this.jsonService.postJson('https://app.networkingsas.com/app/reportes/ventasVendedor2.php', formData).subscribe
     ((res: Array<string>) => {
       console.log(res);
       if (!res) {
         this.records2 = false;
         return;
       }
       this.records2 = true;
       // tslint:disable-next-line: prefer-const
       let data = [];
       let i = 0 ;
       // tslint:disable-next-line: only-arrow-functions
       Object.keys(res).forEach(function(key) {
         data[i] = (res[key]);
         i++;
       });
       console.log(data.length);
       this.numberRecord2 = data.length;
       // tslint:disable-next-line: no-string-literal
       this.tableTitle2 = data[0];
       this.table2 = of(data);
      });
  }
}
