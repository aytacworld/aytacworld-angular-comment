import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommentModule } from 'aytacworld-angular-comment';

import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CommentModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: []
})
export class AppModule { }
