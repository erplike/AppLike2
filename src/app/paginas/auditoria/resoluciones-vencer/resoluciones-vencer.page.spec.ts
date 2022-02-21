import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResolucionesVencerPage } from './resoluciones-vencer.page';

describe('ResolucionesVencerPage', () => {
  let component: ResolucionesVencerPage;
  let fixture: ComponentFixture<ResolucionesVencerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResolucionesVencerPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResolucionesVencerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
