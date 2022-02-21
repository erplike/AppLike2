import { Component, OnInit, ComponentFactoryResolver, ViewContainerRef, ViewChild } from '@angular/core';
import { JsonService } from '../../../json.service';
import { TableComponent } from '../../../table/table.component';
import { Observable } from 'rxjs';
import { of } from 'rxjs';

@Component({
  selector: 'app-traslado-sin-registro',
  templateUrl: './traslado-sin-registro.page.html',
  styleUrls: ['./traslado-sin-registro.page.scss'],
})
export class TrasladoSinRegistroPage implements OnInit {

  tableComponent = TableComponent;
  table: Observable<any[]>;
  tableTitle: any [];
  records: boolean;
  numberRecord: number;
  status: any [];

  constructor(public jsonService: JsonService,
              private componentFactoryResolver: ComponentFactoryResolver, private viewContainerRef: ViewContainerRef) {
}
ngOnInit() {  this.tableResults(); }


tableResults(  ) {
const formData = new FormData();
this.jsonService.postJson('https://app.networkingsas.com/app/auditoria/trasladoSinRegistro.php', formData).subscribe
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
    }
    }
