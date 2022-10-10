import { Component, Input, OnInit } from '@angular/core';
import { Order } from '../../order.model';

@Component({
  selector: 'app-order-list-presentation',
  templateUrl: './order-list-presentation.component.html',
  styleUrls: ['./order-list-presentation.component.scss']
})
export class OrderListPresentationComponent implements OnInit {
  @Input() public set orderResponse(value: Order[]) {
    if (value) {
      this._orderResponse = value;
    }
  }
  public get orderResponse(): Order[] {
    return this._orderResponse;
  }
  private _orderResponse:Order[]=[];
  constructor() { }

  ngOnInit(): void {
  }

}
