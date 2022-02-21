import { Component, OnInit,  } from '@angular/core';
import { JsonService } from '../../../json.service';
import { TableComponent } from '../../../table/table.component';
import { Observable } from 'rxjs';
import { of } from 'rxjs';

@Component({
  selector: 'app-gerente-general',
  templateUrl: './gerente-general.page.html',
  styleUrls: ['./gerente-general.page.scss'],
})
export class GerenteGeneralPage implements OnInit {
  /*  @Input() public page: string;
  @Input() public init: number; */
  records: boolean;
  records2: boolean;
  records3: boolean;
  records4: boolean;
  records5: boolean;
  records6: boolean;
  sucursales: any [];
  tableComponent = TableComponent;
  table: Observable<any[]>;
  tableTitle: any [];
  table2: Observable<any[]>;
  tableTitle2: any [];
  table3: Observable<any[]>;
  tableTitle3: any [];
  table4: Observable<any[]>;
  tableTitle4: any [];
  table5: Observable<any[]>;
  tableTitle5: any [];
  table6: Observable<any[]>;
  tableTitle6: any [];
  tableTitles: any [];
  numberRecord: number;
  numberRecord2: number;
  numberRecord3: number;
  numberRecord4: number;
  numberRecord5: number;
  numberRecord6: number;
  status: any [];
  load: boolean;
  now: Date;
  dayUltimate: Date;

  constructor(public jsonService: JsonService
    ) {
      this.getSucursales();
      const dateFormat = require('dateformat');
      const now = new Date();
      this.now = dateFormat(this.now, 'yyyy-mm-dd');
      this.dayUltimate = new Date(now.getFullYear(), now.getMonth() + 1, 0);
      this.dayUltimate = dateFormat(this.dayUltimate, 'yyyy-mm-dd');
      this.records = true;
}
ngOnInit() { /* this.tableResults('99999', '', ''); */}

    getSucursales() {
      this.sucursales = this.jsonService.getSucursales();
    }
  tableResults( idsucursal: string, fechaDesde: string , fechaHasta: string ) {
    this.load = true;
    const formData = new FormData();
    if (fechaDesde === '') {
      alert('Ingrese la empresa');
      return;
    }
    formData.append('idsucursal', idsucursal);
    formData.append('fechaDesde', fechaDesde);
    formData.append('fechaHasta', fechaHasta);
      // tslint:disable-next-line: align
      this.jsonService.postJson('https://app.networkingsas.com/app/reportes/gerenteGeneral1.php', formData).subscribe
      ((res: Array<string>) => {
      console.log(res);
      if (!res) {
        this.records = false;
        alert('No hay registros');
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
      this.numberRecord = data.length;
      this.status = data[0];
      this.load = false;
      if ( this.status[0] ) {
        alert(this.status[1]);
        return;
      }
      this.tableTitle = data[1];
      this.table = of(data);
     });



    this.jsonService.postJson('https://app.networkingsas.com/app/reportes/gerenteGeneral2.php', formData).subscribe
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


    this.jsonService.postJson('https://app.networkingsas.com/app/reportes/gerenteGeneral3.php', formData).subscribe
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


    this.jsonService.postJson('https://app.networkingsas.com/app/reportes/gerenteGeneral4.php', formData).subscribe
     ((res: Array<string>) => {
     console.log(res);
     if (!res) {
       this.records4 = false;
       return;
     }
     this.records4 = true;
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
     this.numberRecord4  = data.length;
     this.tableTitle4  = data[0];
     this.table4 = of(data);
     // tslint:disable-next-line: no-unused-expression
    });

    this.jsonService.postJson('https://app.networkingsas.com/app/reportes/gerenteGeneral5.php', formData).subscribe
     ((res: Array<string>) => {
     console.log(res);
     if (!res) {
       this.records5 = false;
       return;
     }
     this.records5 = true;
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
     this.numberRecord5  = data.length;
     this.tableTitle5  = data[0];
     this.table5 = of(data);
     // tslint:disable-next-line: no-unused-expression
    });


    this.jsonService.postJson('https://app.networkingsas.com/app/reportes/gerenteGeneral6.php', formData).subscribe
    ((res: Array<string>) => {
    console.log(res);
    if (!res) {
      this.records6 = false;
      return;
    }
    this.records6 = true;
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
    this.numberRecord6  = data.length;
    this.tableTitle6  = data[0];
    this.table6 = of(data);
    // tslint:disable-next-line: no-unused-expression
   });


}
}
