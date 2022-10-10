import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderListContainerComponent } from './order-list-container.component';

describe('OrderListContainerComponent', () => {
  let component: OrderListContainerComponent;
  let fixture: ComponentFixture<OrderListContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderListContainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrderListContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
