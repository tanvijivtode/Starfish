import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InfoPageComponent } from './library/info-page/info-page.component';
import { DefaultComponent } from './library/default/default.component';
import { WelcomeComponent } from './library/welcome/welcome.component';
import { FormsModule } from '@angular/forms'
//import { QuestionService } from 'src/services/questions.service';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    InfoPageComponent,
    DefaultComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot( [
      {path: '', redirectTo: '/info-page', pathMatch: 'full'},
      {path: 'default', component: DefaultComponent},
      {path: 'info-page', component: InfoPageComponent},
      {path: 'welcome', component: WelcomeComponent}
    ])
  ],
  //providers: [QuestionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
