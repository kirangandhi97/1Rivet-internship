import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  onAddNew(){
this.router.navigate(['employee','add'])
  }
}
