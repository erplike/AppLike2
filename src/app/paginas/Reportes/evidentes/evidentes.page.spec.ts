import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EvidentesPage } from './evidentes.page';

describe('EvidentesPage', () => {
  let component: EvidentesPage;
  let fixture: ComponentFixture<EvidentesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EvidentesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EvidentesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
