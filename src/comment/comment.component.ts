import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { email } from 'aytacworld-angular-validator';
import { Comment } from '../shared/comment.model';

@Component({
  selector: 'comment',
  styleUrls: ['comment.component.scss'],
  templateUrl: 'comment.component.html'
})
export class CommentComponent {
  @Output() public onSubmit: EventEmitter<Comment> = new EventEmitter();
  public frm: FormGroup;

  constructor (_fb: FormBuilder) {
    this.frm = _fb.group({
      email: ['', email(true)],
      message: ['', Validators.required],
      name: ''
    });
  }
}
