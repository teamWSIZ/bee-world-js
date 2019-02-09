import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WorldViewComponent } from './world-view/world-view.component';
import { PlaceViewComponent } from './place-view/place-view.component';

@NgModule({
  declarations: [
    AppComponent,
    WorldViewComponent,
    PlaceViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
