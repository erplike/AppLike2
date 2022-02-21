import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VentasProductoPage } from './ventas-producto.page';

describe('VentasProductoPage', () => {
  let component: VentasProductoPage;
  let fixture: ComponentFixture<VentasProductoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VentasProductoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VentasProductoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
