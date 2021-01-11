import { NgModule, Injector, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { createCustomElement } from '@angular/elements';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { APP_BASE_HREF } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  entryComponents: [HelloComponent],
  providers: [{provide: APP_BASE_HREF, useValue : '/' }],
  // bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private injector: Injector) { }

  ngDoBootstrap() {
    const custom = createCustomElement(HelloComponent, { injector: this.injector });
    customElements.define('app-hello', custom);
  }

}
