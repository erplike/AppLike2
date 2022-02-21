import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VentasBimestrePage } from './ventas-bimestre.page';

describe('VentasBimestrePage', () => {
  let component: VentasBimestrePage;
  let fixture: ComponentFixture<VentasBimestrePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VentasBimestrePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VentasBimestrePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
