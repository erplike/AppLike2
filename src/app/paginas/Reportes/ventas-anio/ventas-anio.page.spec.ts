import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VentasAnioPage } from './ventas-anio.page';

describe('VentasAnioPage', () => {
  let component: VentasAnioPage;
  let fixture: ComponentFixture<VentasAnioPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VentasAnioPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VentasAnioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
