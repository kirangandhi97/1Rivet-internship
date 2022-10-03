import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.scss']
})
export class ObservableComponent implements OnInit {
  promiseVal: any;
  constructor() { }

  dellAvailable() {
    return true
  }

  hpAvailable() {
    return false
  }
  ngOnInit(): void {
    let buyLaptop = new Promise((resolve, reject) => {
      if (this.dellAvailable()) {
        setTimeout(() => {
          resolve("Dell available");
        }, 5000)
      }
      else if (this.hpAvailable()) {
        setTimeout(() => {
          resolve("HP available");
        }, 5000)
      }
      else {
        reject("Error occurred!")
      }
      // resolve("solution");
      // reject('Reject')
    })
    buyLaptop.then((res) => {
      console.log('then :', res);
      this.promiseVal = res;
    }).catch((err) => {
      console.log('catch:', err);
      this.promiseVal = err;
    })
  }


  // onMsg(){

  // }
}
