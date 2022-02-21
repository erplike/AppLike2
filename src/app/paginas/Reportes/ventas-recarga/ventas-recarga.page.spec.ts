import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VentasRecargaPage } from './ventas-recarga.page';

describe('VentasRecargaPage', () => {
  let component: VentasRecargaPage;
  let fixture: ComponentFixture<VentasRecargaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VentasRecargaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VentasRecargaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
