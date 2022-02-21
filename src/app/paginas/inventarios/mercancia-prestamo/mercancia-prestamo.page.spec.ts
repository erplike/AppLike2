import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MercanciaPrestamoPage } from './mercancia-prestamo.page';

describe('MercanciaPrestamoPage', () => {
  let component: MercanciaPrestamoPage;
  let fixture: ComponentFixture<MercanciaPrestamoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MercanciaPrestamoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MercanciaPrestamoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
