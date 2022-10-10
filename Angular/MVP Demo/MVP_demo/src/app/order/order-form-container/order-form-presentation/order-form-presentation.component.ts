import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { OrderFormPresenterService } from '../order-form-presenter/order-form-presenter.service';

@Component({
  selector: 'app-order-form-presentation',
  templateUrl: './order-form-presentation.component.html',
  styleUrls: ['./order-form-presentation.component.scss']
})
export class OrderFormPresentationComponent implements OnInit {
  public orderForm: FormGroup;
  constructor(private orderPresenter:OrderFormPresenterService) {
    this.orderForm = this.orderPresenter.buildForm();
   }

  ngOnInit(): void {
  }

}
