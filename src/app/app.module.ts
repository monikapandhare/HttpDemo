import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashBoardComponent } from './shared/components/dash-board/dash-board.component';
import { PostComponent } from './shared/components/post/post.component';
import { EditAddpostComponent } from './shared/components/edit-addpost/edit-addpost.component';



@NgModule({
  declarations: [
    AppComponent,
    DashBoardComponent,
    PostComponent,
    EditAddpostComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
