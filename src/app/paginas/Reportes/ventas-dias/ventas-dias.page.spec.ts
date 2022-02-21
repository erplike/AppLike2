import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VentasDiasPage } from './ventas-dias.page';

describe('VentasDiasPage', () => {
  let component: VentasDiasPage;
  let fixture: ComponentFixture<VentasDiasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VentasDiasPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VentasDiasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
