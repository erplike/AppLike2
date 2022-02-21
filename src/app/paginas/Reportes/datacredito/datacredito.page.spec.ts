import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatacreditoPage } from './datacredito.page';

describe('DatacreditoPage', () => {
  let component: DatacreditoPage;
  let fixture: ComponentFixture<DatacreditoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatacreditoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatacreditoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
