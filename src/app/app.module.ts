import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { JiraService } from '../app/services/jira.services';
import {TFSService} from '../app/services/tfs.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    JiraService,
    TFSService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
