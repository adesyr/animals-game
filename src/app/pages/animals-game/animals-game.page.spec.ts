import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimalsGamePage } from './animals-game.page';

describe('AnimalsGamePage', () => {
  let component: AnimalsGamePage;
  let fixture: ComponentFixture<AnimalsGamePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimalsGamePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimalsGamePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
