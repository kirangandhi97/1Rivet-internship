import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildCommunicationComponent } from './child-communication.component';

describe('ChildCommunicationComponent', () => {
  let component: ChildCommunicationComponent;
  let fixture: ComponentFixture<ChildCommunicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildCommunicationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChildCommunicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
