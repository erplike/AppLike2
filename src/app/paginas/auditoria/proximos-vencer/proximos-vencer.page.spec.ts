import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProximosVencerPage } from './proximos-vencer.page';

describe('ProximosVencerPage', () => {
  let component: ProximosVencerPage;
  let fixture: ComponentFixture<ProximosVencerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProximosVencerPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProximosVencerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
