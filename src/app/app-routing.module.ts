import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InfoPageComponent } from './library/info-page/info-page.component';
import { DefaultComponent } from './library/default/default.component';
import { WelcomeComponent } from './library/welcome/welcome.component';

const routes: Routes = [
  //{path: '', redirectTo: 'library/default', pathMatch: 'full'},
  // {path: 'library/default', component: DefaultComponent},
  // {path: 'library/info-page', component: InfoPageComponent},
  // {path: 'library/welcome', component: WelcomeComponent},
  // {path: '', redirectTo: '/library/info-page', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
