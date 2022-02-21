import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReporteSalidaPage } from './reporte-salida.page';

describe('ReporteSalidaPage', () => {
  let component: ReporteSalidaPage;
  let fixture: ComponentFixture<ReporteSalidaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReporteSalidaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReporteSalidaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
