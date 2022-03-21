import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Netflix-Angular';

  terror = [
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
  ];


  comedy = [
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
  ];

  drama = [
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
  ];
}
