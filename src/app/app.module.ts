import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TablesComponent } from './tables/tables.component';
import { ChartsComponent } from './charts/charts.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ColorsComponent } from './utilities/colors/colors.component';
import { AnimationsComponent } from './utilities/animations/animations.component';
import { BordersComponent } from './utilities/borders/borders.component';
import { OtherComponent } from './utilities/other/other.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    TablesComponent,
    ChartsComponent,
    NotFoundComponent,
    ColorsComponent,
    AnimationsComponent,
    BordersComponent,
    OtherComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
