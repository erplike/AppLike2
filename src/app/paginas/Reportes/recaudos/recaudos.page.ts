import { Component, OnInit, ComponentFactoryResolver, ViewContainerRef, ViewChild } from '@angular/core';
import { JsonService } from '../../../json.service';
import { TableComponent } from '../../../table/table.component';
import { Observable } from 'rxjs';
import { of } from 'rxjs';


@Component({
  selector: 'app-recaudos',
  templateUrl: './recaudos.page.html',
  styleUrls: ['./recaudos.page.scss'],
})
export class RecaudosPage implements OnInit {

  
  sucursales: any [];
  tableComponent = TableComponent;
  table: Observable<any[]>;
  tableTitle: any [];
  records: boolean;
  numberRecord: number;
  status: any [];

constructor(public jsonService: JsonService,
            private componentFactoryResolver: ComponentFactoryResolver, private viewContainerRef: ViewContainerRef) {
              this.getSucursales();
              this.records = true;
}
ngOnInit() {  }

    getSucursales() {
      this.sucursales = this.jsonService.getSucursales();
    }
  tableResults( idsucursal: string, fechaDesde: string , fechaHasta: string, filtro: string, idtipo: string ) {
    this.records = false;
    const formData = new FormData();
    formData.append('idsucursal', idsucursal);
    formData.append('fechaDesde', fechaDesde);
    formData.append('fechaHasta', fechaHasta);
    formData.append('filtro', filtro);
    formData.append('idtipo', idtipo);
    this.jsonService.postJson('https://app.networkingsas.com/app/reportes/buscarPagos.php', formData).subscribe
    ((res: Array<string>) => {
      console.log(res);
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
      if (!res) {
        this.records = false;
        return;
      }
      this.records = true;
      this.tableTitle = data[1];
      this.table = of(data);
     });
  }
}
