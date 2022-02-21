import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GerenteGeneralPage } from './gerente-general.page';

describe('GerenteGeneralPage', () => {
  let component: GerenteGeneralPage;
  let fixture: ComponentFixture<GerenteGeneralPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GerenteGeneralPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GerenteGeneralPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
