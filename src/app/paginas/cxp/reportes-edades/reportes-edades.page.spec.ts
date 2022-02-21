import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportesEdadesPage } from './reportes-edades.page';

describe('ReportesEdadesPage', () => {
  let component: ReportesEdadesPage;
  let fixture: ComponentFixture<ReportesEdadesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportesEdadesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportesEdadesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
