import { Component, OnInit, Input } from '@angular/core';
import { JsonService } from '../json.service';

@Component ( {
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
} )
export class TableComponent implements OnInit {
  @Input() public page: string;
  @Input() public init: number;
  name = 'nombre';
  table: any [];
  tableTitle: [];
  /* contact: any[]; */
  constructor(public jsonService: JsonService) {
    }
  ngOnInit() {/* this.get(); */
    /* alert(this.init); */
    this.jsonService.getJson('https://app.networkingsas.com/app/' + this.page).subscribe
    ((res: Array<string>) => {
      console.log(res);
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
      this.tableTitle = data[0];
      this.table = data;
      /* window.location.reload(); */
     /*  alert(data.length); */
     });
     /* alert(this.contact.length); */
  }
 /*  getData(url: string) {
    this.jsonService.getJson('https://app.networkingsas.com/').subscribe((res: any) => {
      console.log(res);
      let table = Array.from(res);
     });
     // tslint:disable-next-line: align
     return table;
  } */
 /*  get() {
    this.jsonService.getJson('https://app.networkingsas.com/').pipe<any[]>(map( (res: any) => res.json() )).subscribe( data => {

      this.contact = [];

      data.forEach( ( x ) => {

          this.contact.push( x );
      } );

  }, err => { } );
    console.log(this.contact);
  } */
}
