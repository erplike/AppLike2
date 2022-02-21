import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UtilidadPage } from './utilidad.page';

describe('UtilidadPage', () => {
  let component: UtilidadPage;
  let fixture: ComponentFixture<UtilidadPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UtilidadPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UtilidadPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
