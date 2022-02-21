import { Component, OnInit, ComponentFactoryResolver, ViewContainerRef, ViewChild } from '@angular/core';
import { JsonService } from '../../../json.service';
import { TableComponent } from '../../../table/table.component';
import { Observable } from 'rxjs';
import { of } from 'rxjs'; 

@Component({
  selector: 'app-ventas-claro-hogar',
  templateUrl: './ventas-claro-hogar.page.html',
  styleUrls: ['./ventas-claro-hogar.page.scss'],
})
export class VentasClaroHogarPage implements OnInit {
  sucursales: any [];
  tableComponent = TableComponent;
  table: Observable<any[]>;
  tableTitle: any [];
  table2: Observable<any[]>;
  tableTitle2: any [];
  table3: Observable<any[]>;
  tableTitle3: any [];
  records: boolean;
  records2: boolean;
  records3: boolean;
  numberRecord: number;
  numberRecord2: number;
  numberRecord3: number;
  status: any [];
  categorias: any [];

constructor(public jsonService: JsonService,
            private componentFactoryResolver: ComponentFactoryResolver, private viewContainerRef: ViewContainerRef) {
              this.getSucursales(); this.getCategoria();
}
ngOnInit() { }

    getSucursales() {
      this.sucursales = this.jsonService.getSucursales();
    }
    getCategoria() {
      this.categorias = this.jsonService.getCategoria();
    }
  tableResults( idsucursal: string, fechaDesde: string , fechaHasta: string ) {
    const formData = new FormData();
    formData.append('idsucursal', idsucursal);
    formData.append('fechaDesde', fechaDesde);
    formData.append('fechaHasta', fechaHasta);
    this.jsonService.postJson('https://app.networkingsas.com/app/reportes/ventasClaroHogar.php', formData).subscribe
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
      if ( this.status[0] ) {
        alert(this.status[1]);
        return;
      }
      this.records = true;
      this.tableTitle = data[1];
      this.table = of(data);
     });

     this.jsonService.postJson('https://app.networkingsas.com/app/reportes/ventasClaroHogar2.php', formData).subscribe
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
      // tslint:disable-next-line: no-string-literal
      this.numberRecord2  = data.length;
      this.tableTitle2  = data[0];
      this.table2 = of(data);
      // tslint:disable-next-line: no-unused-expression
     });


     this.jsonService.postJson('https://app.networkingsas.com/app/reportes/ventasClaroHogar3.php', formData).subscribe
      ((res: Array<string>) => {
      console.log(res);
      if (!res) {
        this.records3 = false;
        return;
      }
      this.records3 = true;
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
      this.numberRecord3  = data.length;
      this.tableTitle3  = data[0];
      this.table3 = of(data);
      // tslint:disable-next-line: no-unused-expression
     });
  }
}


