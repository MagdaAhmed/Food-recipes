import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OlivePizzaPage } from './olive-pizza.page';

describe('OlivePizzaPage', () => {
  let component: OlivePizzaPage;
  let fixture: ComponentFixture<OlivePizzaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OlivePizzaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OlivePizzaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
