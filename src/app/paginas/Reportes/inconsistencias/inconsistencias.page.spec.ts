import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InconsistenciasPage } from './inconsistencias.page';

describe('InconsistenciasPage', () => {
  let component: InconsistenciasPage;
  let fixture: ComponentFixture<InconsistenciasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InconsistenciasPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InconsistenciasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
