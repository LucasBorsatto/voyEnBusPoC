import 'hammerjs';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from '@angular/material';

import { AppComponent } from './app.component';
import { StopModule } from './stop/stop.module';

import { StopService } from './stop/stopService';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    StopModule
  ],
  providers: [
    StopService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
