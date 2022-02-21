import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VentasVendedorPage } from './ventas-vendedor.page';

describe('VentasVendedorPage', () => {
  let component: VentasVendedorPage;
  let fixture: ComponentFixture<VentasVendedorPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VentasVendedorPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VentasVendedorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
