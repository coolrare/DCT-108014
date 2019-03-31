import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ChartsComponent } from './charts/charts.component';
import { TablesComponent } from './tables/tables.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ColorsComponent } from './utilities/colors/colors.component';
import { BordersComponent } from './utilities/borders/borders.component';
import { AnimationsComponent } from './utilities/animations/animations.component';
import { OtherComponent } from './utilities/other/other.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'utilities',
    children: [
      { path: '', redirectTo: 'other', pathMatch: 'full' },
      { path: 'colors', component: ColorsComponent },
      { path: 'borders', component: BordersComponent },
      { path: 'animations', component: AnimationsComponent  },
      { path: 'other', component: OtherComponent },
    ]
  },
  { path: 'tables', component: TablesComponent },
  { path: 'charts', component: ChartsComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
