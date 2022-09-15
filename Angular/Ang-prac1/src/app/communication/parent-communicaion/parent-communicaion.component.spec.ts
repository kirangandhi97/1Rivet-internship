import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentCommunicaionComponent } from './parent-communicaion.component';

describe('ParentCommunicaionComponent', () => {
  let component: ParentCommunicaionComponent;
  let fixture: ComponentFixture<ParentCommunicaionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParentCommunicaionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParentCommunicaionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
