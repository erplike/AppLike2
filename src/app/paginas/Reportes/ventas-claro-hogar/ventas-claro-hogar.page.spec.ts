import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VentasClaroHogarPage } from './ventas-claro-hogar.page';

describe('VentasClaroHogarPage', () => {
  let component: VentasClaroHogarPage;
  let fixture: ComponentFixture<VentasClaroHogarPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VentasClaroHogarPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VentasClaroHogarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
