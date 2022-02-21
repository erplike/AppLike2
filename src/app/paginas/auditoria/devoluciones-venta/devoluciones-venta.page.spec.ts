import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DevolucionesVentaPage } from './devoluciones-venta.page';

describe('DevolucionesVentaPage', () => {
  let component: DevolucionesVentaPage;
  let fixture: ComponentFixture<DevolucionesVentaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DevolucionesVentaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DevolucionesVentaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
