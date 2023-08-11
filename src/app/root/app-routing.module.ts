import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CounterComponent } from '../counter/counter.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { HomeComponent } from '../home/home.component';
import { AboutMeComponent } from '../about-me/about-me.component';
import { CrudComponent } from '../crud/crud.component';

const routes: Routes = [
  {
    path: "",
    redirectTo: "home",
    pathMatch: 'full',
    
  },
  {
    path: "home",
    component: HomeComponent
  },
  {
    path: "aboutme",
    component: AboutMeComponent
  },
  {
    path: "counter",
    component: CounterComponent
  },
  {
    path: "crud",
    component: CrudComponent
  },
  {
    path:"navbar",
    component: NavbarComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
