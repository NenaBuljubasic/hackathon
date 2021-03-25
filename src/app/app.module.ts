import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RezervacijeComponent } from './rezervacije/rezervacije.component';
import { HomeComponent } from './home/home.component';
import { StatusComponent } from './status/status.component';
import { AdiministracijaComponent } from './adiministracija/adiministracija.component';

@NgModule({
  declarations: [
    AppComponent,
    RezervacijeComponent,
    HomeComponent,
    StatusComponent,
    AdiministracijaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
