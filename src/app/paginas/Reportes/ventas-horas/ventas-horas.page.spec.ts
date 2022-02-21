import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VentasHorasPage } from './ventas-horas.page';

describe('VentasHorasPage', () => {
  let component: VentasHorasPage;
  let fixture: ComponentFixture<VentasHorasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VentasHorasPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VentasHorasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
