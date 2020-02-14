import { Component, OnInit } from '@angular/core';
import { Libro } from 'src/app/model/libro.model';
import { LIBROS } from 'src/app/libros';

@Component({
  selector: 'app-libros',
  templateUrl: './libros.component.html',
  styleUrls: ['./libros.component.scss']
})
export class LibrosComponent implements OnInit {

  libros: Array<any>;
  busqueda: string;
  libroSeleccionado: Libro;

  constructor() {
    this.busqueda = '';
    this.libros = LIBROS;
    this.libroSeleccionado = this.libros[0];

  }//constructor()

  ngOnInit() {

  }//constructor()

  seleccionarLibro(libro: Libro) {
    console.debug('Click en %o', libro);
    this.libroSeleccionado = libro;
  }// seleccionarLibro(libro: Libro)

}//LibrosComponent
