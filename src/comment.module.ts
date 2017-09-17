import { NgModule } from '@angular/core';
import { InputComponent } from './input/input.component';
import { TextComponent } from './text/text.component';

@NgModule({
  declarations: [
    InputComponent,
    TextComponent
  ],
  exports: [
    InputComponent,
    TextComponent
  ]
})
export class CommentModule { }
