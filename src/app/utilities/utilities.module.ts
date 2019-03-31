import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UtilitiesRoutingModule } from './utilities-routing.module';
import { ColorsComponent } from './colors/colors.component';
import { AnimationsComponent } from './animations/animations.component';
import { BordersComponent } from './borders/borders.component';
import { OtherComponent } from './other/other.component';

@NgModule({
  declarations: [
    ColorsComponent,
    AnimationsComponent,
    BordersComponent,
    OtherComponent
  ],
  imports: [
    CommonModule,
    UtilitiesRoutingModule
  ]
})
export class UtilitiesModule { }
