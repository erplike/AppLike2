import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VentasClientePage } from './ventas-cliente.page';

describe('VentasClientePage', () => {
  let component: VentasClientePage;
  let fixture: ComponentFixture<VentasClientePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VentasClientePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VentasClientePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
