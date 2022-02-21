import { Component, OnInit, ComponentFactoryResolver, ViewContainerRef, ViewChild } from '@angular/core';
import { JsonService } from '../../../json.service';
import { TableComponent } from '../../../table/table.component';
import { Observable } from 'rxjs';
import { of } from 'rxjs';

@Component({
  selector: 'app-cierres-caja',
  templateUrl: './cierres-caja.page.html',
  styleUrls: ['./cierres-caja.page.scss'],
})
export class CierresCajaPage implements OnInit {

  sucursales: any [];
  tableComponent = TableComponent;
  table: Observable<any[]>;
  table2: Observable<any[]>;
  tableTitle: any [];
  records: boolean;
  ingresos: string;
  salidas: string;

constructor(public jsonService: JsonService,
            private componentFactoryResolver: ComponentFactoryResolver, private viewContainerRef: ViewContainerRef) {
              this.getSucursales();
}
ngOnInit() {  this.tableResults('99999'); }

    getSucursales() {
      this.sucursales = this.jsonService.getSucursales();
    }
  tableResults( iduser: string ) {
    const formData = new FormData();
    formData.append('iduser', iduser);
    this.jsonService.postJson('https://app.networkingsas.com/app/flujoCaja/miCierreCaja.php', formData).subscribe
    ((res: Array<string>) => {
      console.log(res);
      if (!res) {
        this.records = false;
        return;
      }
      this.records = true;
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
      this.tableTitle = data[0];
      this.table = of(data);
     });

    this.jsonService.postJson('https://app.networkingsas.com/app/flujoCaja/miCierreCaja2.php', formData).subscribe
     ((res: Array<string>) => {
       console.log(res);
       if (!res) {
         this.records = false;
         return;
       }
       this.records = true;
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
       this.tableTitle = data[0];
       this.table2 = of(data);
      });
  }
}
