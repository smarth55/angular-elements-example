import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { ClickTrackerModule, ClickTrackerComponent } from 'click-tracker';

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    ClickTrackerModule
  ],
  providers: [],
  bootstrap: []
})
export class AppModule {
  constructor(private injector: Injector) { }

  ngDoBootstrap() {
    const ClickTrackerElm = createCustomElement(ClickTrackerComponent, {injector: this.injector});
    customElements.define('ct-click-tracker', ClickTrackerElm);
  }
}
