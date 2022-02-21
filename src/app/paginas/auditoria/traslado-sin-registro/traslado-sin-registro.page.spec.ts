import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrasladoSinRegistroPage } from './traslado-sin-registro.page';

describe('TrasladoSinRegistroPage', () => {
  let component: TrasladoSinRegistroPage;
  let fixture: ComponentFixture<TrasladoSinRegistroPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrasladoSinRegistroPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrasladoSinRegistroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
