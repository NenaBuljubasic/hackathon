import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdministracijaComponent } from './administracija/administracija.component';

import { RezervacijeComponent } from './rezervacije/rezervacije.component';

//const routes: Routes = [];
const routes: Routes = [
  
  { path:'rezervacije', component: RezervacijeComponent },
  { path:'administracija'   , component: AdministracijaComponent  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
