import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pipes2Component } from './pipes2.component';

describe('Pipes2Component', () => {
  let component: Pipes2Component;
  let fixture: ComponentFixture<Pipes2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Pipes2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Pipes2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
