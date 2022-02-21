import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VentasPorMarcaPage } from './ventas-por-marca.page';

describe('VentasPorMarcaPage', () => {
  let component: VentasPorMarcaPage;
  let fixture: ComponentFixture<VentasPorMarcaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VentasPorMarcaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VentasPorMarcaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
