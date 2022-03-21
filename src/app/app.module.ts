import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavigatorComponent } from './components/navigator/navigator.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { HeroComponent } from './components/hero/hero.component';
import { ComedyComponent } from './components/comedy/comedy.component';
import { DramaComponent } from './components/drama/drama.component';


@NgModule({
  declarations: [
    AppComponent,
    NavigatorComponent,
    GalleryComponent,
    HeroComponent,
    ComedyComponent,
    DramaComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
