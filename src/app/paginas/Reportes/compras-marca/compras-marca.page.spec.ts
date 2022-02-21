import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComprasMarcaPage } from './compras-marca.page';

describe('ComprasMarcaPage', () => {
  let component: ComprasMarcaPage;
  let fixture: ComponentFixture<ComprasMarcaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComprasMarcaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComprasMarcaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
