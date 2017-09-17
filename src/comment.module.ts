import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputComponent } from './input/input.component';
import { CommentComponent } from './comment/comment.component';

@NgModule({
  declarations: [
    InputComponent,
    CommentComponent
  ],
  exports: [
    InputComponent,
    CommentComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class CommentModule { }
