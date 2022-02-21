import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VentasSemestrePage } from './ventas-semestre.page';

describe('VentasSemestrePage', () => {
  let component: VentasSemestrePage;
  let fixture: ComponentFixture<VentasSemestrePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VentasSemestrePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VentasSemestrePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
