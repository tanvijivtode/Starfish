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
import { WaysToHelpComponent } from './library/ways-to-help/ways-to-help.component';

@NgModule({
  declarations: [
    AppComponent,
    InfoPageComponent,
    DefaultComponent,
    WelcomeComponent,
    WaysToHelpComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot( [
      {path: '', redirectTo: '/info-page', pathMatch: 'full'},
      {path: 'library/default', component: DefaultComponent},
      {path: 'library/info-page', component: InfoPageComponent},
      {path: 'library/welcome', component: WelcomeComponent},
      {path: 'library/ways-to-help', component: WaysToHelpComponent}
    ])
  ],
  //providers: [QuestionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
