import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecaudosPage } from './recaudos.page';

describe('RecaudosPage', () => {
  let component: RecaudosPage;
  let fixture: ComponentFixture<RecaudosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecaudosPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecaudosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
