import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  template: `
  <div [formGroup]="frm">
    <c-input [label]="'Hello'" formControlName="hello"></c-input>
    <c-input [label]="'Name'" [validStyle]="true" formControlName="name"></c-input>
    <c-input [label]="'Desc'" formControlName="description"></c-input>
  </div>
  `
})
export class AppComponent {
  frm: FormGroup;

  constructor (private fb: FormBuilder) {
    this.frm = fb.group({
      description : [null, Validators.compose([Validators.required, Validators.minLength(30), Validators.maxLength(500)])],
      hello: [null],
      name : [null, Validators.required]
    });
  }
}
