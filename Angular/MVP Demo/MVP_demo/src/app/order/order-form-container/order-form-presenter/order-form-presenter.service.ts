import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class OrderFormPresenterService {

  constructor(private fb:FormBuilder) { }

  public buildForm(): FormGroup {
    return this.fb.group({
        id: [''],
        name: ['', Validators.compose([Validators.required])],
        address: ['', Validators.compose([Validators.required])],
        contactno: ['', Validators.compose([Validators.required])]
    });
}
}
