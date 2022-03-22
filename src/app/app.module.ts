import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavigatorComponent } from './components/navigator/navigator.component';
import { HeroComponent } from './components/hero/hero.component';
import { FilmsComponent } from './components/films/films.component';


@NgModule({
  declarations: [
    AppComponent,
    NavigatorComponent,
    HeroComponent,
    FilmsComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
