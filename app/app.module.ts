import 'rxjs/add/operator/toPromise';
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule }    from '@angular/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent }  from './app.component';
import { AboutComponent } from './about.component';
import { DashboardComponent } from './dashboard.component';
import { HeaderComponent } from './header.component';
import { DataService } from './data.service';

@NgModule({
  imports:      [ 
    BrowserModule,
    AppRoutingModule,
    HttpModule
  ],
  declarations: [ 
    AppComponent,
    AboutComponent,
    DashboardComponent,
    HeaderComponent
  ],
  providers: [ DataService ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
