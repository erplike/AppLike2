import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeparadosPage } from './separados.page';

describe('SeparadosPage', () => {
  let component: SeparadosPage;
  let fixture: ComponentFixture<SeparadosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeparadosPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeparadosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
