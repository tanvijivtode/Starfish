import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InfoPageComponent } from './library/info-page/info-page.component';
import { DefaultComponent } from './library/default/default.component';
import { WelcomeComponent } from './library/welcome/welcome.component';
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { WaysToHelpComponent } from './library/ways-to-help/ways-to-help.component';
import { ColorDirective } from './color.directive';
import { InMemoryDataService } from 'src/services/in-memory-data.service';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

@NgModule({
  declarations: [
    AppComponent,
    InfoPageComponent,
    DefaultComponent,
    WelcomeComponent,
    WaysToHelpComponent,
    ColorDirective,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,

    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    ),
    RouterModule.forRoot( [
      {path: '', redirectTo: '/info-page', pathMatch: 'full'},
      {path: 'library/default', component: DefaultComponent},
      {path: 'library/info-page', component: InfoPageComponent},
      {path: 'library/welcome', component: WelcomeComponent},
      {path: 'library/ways-to-help', component: WaysToHelpComponent}
    ])
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
