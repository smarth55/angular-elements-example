import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ClickTrackerModule } from 'click-tracker';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ClickTrackerModule
  ],
  exports: [ClickTrackerModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
