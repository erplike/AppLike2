import { Component, OnInit, ComponentFactoryResolver, ViewContainerRef, ViewChild } from '@angular/core';
import { JsonService } from '../../../json.service';
import { TableComponent } from '../../../table/table.component';
import { ChangeDetectionStrategy } from '@angular/compiler/src/core';
import { Observable } from 'rxjs';
import { of } from 'rxjs';


@Component({
  selector: 'app-proximos-vencer',
  templateUrl: './proximos-vencer.page.html',
  styleUrls: ['./proximos-vencer.page.scss'],
})
export class ProximosVencerPage implements OnInit {

  @ViewChild('container', {read: ViewContainerRef}) container: ViewContainerRef;
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
              this.records = true;
              this.load = false;
}
ngOnInit() { /* this.tableResults('99999'); */ }

    getSucursales() {
      this.sucursales = this.jsonService.getSucursales();
    }
  tableResults( idsucursal: string, dias: string ) {
    this.load = true;
    const formData = new FormData();
    formData.append('idsucursal', idsucursal);
    formData.append('dias', dias);
    this.jsonService.postJson('https://app.networkingsas.com/app/auditoria/cad.php', formData).subscribe
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
