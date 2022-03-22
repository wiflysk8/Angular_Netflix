import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Netflix-Angular';  
  
  terrorFilms = {
    section:"Terrror",
  films : [
    {
      name: 'Apostol',
      photo: '../assets/Terror/apostol.jpg',
    },
    {
      name: 'Calle terror',
      photo: '../assets/Terror/calleterror.jpg',
    },
    {
      name: 'Infierno bajo el agua',
      photo: '../assets/Terror/infiernoagua.webp',
    },
    {
      name: 'Multiople',
      photo: '../assets/Terror/multiple.webp',
    },
    {
      name: 'Reflejos',
      photo: '../assets/Terror/reflejos.webp',
    },
    {
      name: 'Malasaña 32',
      photo: '../assets/Terror/malasana.webp',
    },
  ]
};

comedyFilms = {
  section:"Comedia",
films : [
    {
      name: 'rick y morty',
      photo: '../assets/Comedia/rickandmorty.webp',
    },
    {
      name: 'cazafantasmas',
      photo: '../assets/Comedia/cazafantasmas.webp',
    },
    {
      name: 'dictador',
      photo: '../assets/Comedia/dictador.webp',
    },
    {
      name: 'erase una vez en hollywood',
      photo: '../assets/Comedia/erasehollywood.webp',
    },
    {
      name: 'family guy',
      photo: '../assets/Comedia/family guy.webp',
    },
    {
      name: 'scary movie 3',
      photo: '../assets/Comedia/scarymovie3.webp',
    },
  ]
  };

  dramaFilms = {
    section:"Comedia",
    films : [
    {
      name: '1917',
      photo: '../assets/Drama/1917.webp',
    },
    {
      name: 'arrival',
      photo: '../assets/Drama/arrival.webp',
    },
    {
      name: 'El club de la lucha',
      photo: '../assets/Drama/clublucha.webp',
    },
    {
      name: 'Naufrago',
      photo: '../assets/Drama/naufrago.webp',
    },
    {
      name: 'Salvar al soldado ryan',
      photo: '../assets/Drama/salvaralsoldado.webp',
    },
    {
      name: 'Scarface',
      photo: '../assets/Drama/scarface.webp',
    },
  ]
  };

  actionFilms = {
    section:"Acción",
    films : [
    {
      name: 'Equalizer 2',
      photo: '../assets/Accion/equalizer2.webp',
    },
    {
      name: 'Heat',
      photo: '../assets/Accion/heat.webp',
    },
    {
      name: 'John wick 2',
      photo: '../assets/Accion/johnwick2.webp',
    },
    {
      name: 'renacido',
      photo: '../assets/Accion/renacido.webp',
    },
    {
      name: 'Guerra Mundial Z',
      photo: '../assets/Accion/worldwarz.webp',
    },
    {
      name: 'Kill Bill',
      photo: '../assets/Accion/killbill2.webp',
    },
  ]
  };
}
