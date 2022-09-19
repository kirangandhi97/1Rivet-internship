import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-customers-form',
  templateUrl: './customers-form.component.html',
  styleUrls: ['./customers-form.component.scss']
})
export class CustomersFormComponent implements OnInit {
title:string;
customerID:any;

  constructor(private activatedroute:ActivatedRoute) {
    this.title = '';
    console.log(activatedroute);
   }

  ngOnInit(): void {
    this.customerID=this.activatedroute.snapshot.params['id']
    this.title=this.customerID ? 'edit' : 'add';
  }

}
