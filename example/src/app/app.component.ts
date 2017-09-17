import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  template: `
  <comment (onSubmit)="onSubmitClicked($event)"></comment>
  `
})
export class AppComponent {
  public onSubmitClicked (comment: any): void {
    // tslint:disable-next-line:no-console
    console.log(comment);
  }
}
