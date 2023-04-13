import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {LibCModule} from '@test/lib-b'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, LibCModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
