import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VentasMesPage } from './ventas-mes.page';

describe('VentasMesPage', () => {
  let component: VentasMesPage;
  let fixture: ComponentFixture<VentasMesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VentasMesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VentasMesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
