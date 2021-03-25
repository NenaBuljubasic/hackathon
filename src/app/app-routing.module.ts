import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdiministracijaComponent } from './adiministracija/adiministracija.component';
import { HomeComponent } from './home/home.component';
import { RezervacijeComponent } from './rezervacije/rezervacije.component';

//const routes: Routes = [];
const routes: Routes = [
  { path:'home' , component: HomeComponent  },
  { path:'rezervacije', component: RezervacijeComponent },
  { path:'**'   , component: AdiministracijaComponent  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
