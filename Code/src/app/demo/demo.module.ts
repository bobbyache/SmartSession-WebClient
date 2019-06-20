import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

import { DemoRoutingModule } from './demo-routing.module';
import { ButtonsComponent } from './buttons/buttons.component';
import { FlexboxComponent } from './flexbox/flexbox.component';

@NgModule({
  declarations: [ButtonsComponent, FlexboxComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,
    DemoRoutingModule
  ]
})
export class DemoModule { }
