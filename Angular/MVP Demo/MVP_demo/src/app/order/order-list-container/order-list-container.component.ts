import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from '../order.model';
import { OrderService } from '../order.service';

@Component({
  selector: 'app-order-list-container',
  templateUrl: './order-list-container.component.html',
  styleUrls: ['./order-list-container.component.scss']
})
export class OrderListContainerComponent implements OnInit {
public orderList$:Observable<Order[]> = this.orderService.getAllOrderData();
  constructor(private orderService:OrderService) { }

  ngOnInit(): void {
  }

}
