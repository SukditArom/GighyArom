import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './include/header/header.component';
import { LeftbarComponent } from './include/leftbar/leftbar.component';
import { ContentComponent } from './content/content.component';

import { GighyService } from "./services/gighy.service";
import { HttpModule } from "@angular/http";
import { RouterModule } from "@angular/router";
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LeftbarComponent,
    ContentComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot([
      
      {path:"", component: ContentComponent},
      {path:"search/:id", component: ContentComponent},
      {path:"**", redirectTo:""}
    ],
  { useHash: true})
  ],
  providers: [GighyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
