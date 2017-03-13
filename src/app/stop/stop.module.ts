import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StopComponent } from './stop.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from '@angular/material';
import { StopService } from './stopService';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    StopComponent
  ],
  providers: [
    StopService
  ],
  declarations: [StopComponent]
})
export class StopModule { }
