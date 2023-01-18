import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvBindEx2Component } from './ev-bind-ex2.component';

describe('EvBindEx2Component', () => {
  let component: EvBindEx2Component;
  let fixture: ComponentFixture<EvBindEx2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EvBindEx2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EvBindEx2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
