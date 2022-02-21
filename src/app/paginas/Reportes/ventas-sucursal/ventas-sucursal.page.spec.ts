import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VentasSucursalPage } from './ventas-sucursal.page';

describe('VentasSucursalPage', () => {
  let component: VentasSucursalPage;
  let fixture: ComponentFixture<VentasSucursalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VentasSucursalPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VentasSucursalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
