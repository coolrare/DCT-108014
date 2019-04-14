import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ChartsComponent } from './charts/charts.component';
import { TablesComponent } from './tables/tables.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LayoutComponent } from './layout/layout.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth.guard';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  { path: '', component: LayoutComponent,
    children: [
      { path: '', component: DashboardComponent },
      { path: 'pages', loadChildren: './pages/pages.module#PagesModule' },
      { path: 'utilities',
        canActivate: [AuthGuard],
        loadChildren: './utilities/utilities.module#UtilitiesModule' },
      { path: 'tables', component: TablesComponent },
      { path: 'charts', component: ChartsComponent },
    ]
  },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
