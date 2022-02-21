import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CierresCajaPage } from './cierres-caja.page';

describe('CierresCajaPage', () => {
  let component: CierresCajaPage;
  let fixture: ComponentFixture<CierresCajaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CierresCajaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CierresCajaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
