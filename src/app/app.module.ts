import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './root/app-routing.module';
import { AppComponent } from './root/app.component';
import { CounterComponent } from './counter/counter.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { CardComponent } from './card/card.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { CrudComponent } from './crud/crud.component';
import { LinkComponent } from './counter/link/link.component';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    NavbarComponent,
    HomeComponent,
    CardComponent,
    AboutMeComponent,
    CrudComponent,
    LinkComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
