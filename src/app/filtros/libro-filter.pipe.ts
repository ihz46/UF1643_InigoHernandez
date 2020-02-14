import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtroLibro'
})
export class FiltroLibroPipe implements PipeTransform {


  //Pasamos al filtro el array de libros y el campo a buscar
  transform(libros: any, busqueda: string): any {

    console.trace('Entramos en el filtro');

    let resultadoBusqueda = libros;

    //Pasamos a mínusculas la búsqueda
    busqueda = busqueda.toLowerCase();

    //Comprobamos que no sea vacía la búsqueda
    if (busqueda && '' !== busqueda) {
      resultadoBusqueda = resultadoBusqueda.filter((el) => {

        //Unimos el nombre del libro junto al isbn por cada iteración
        const stringBuscado = (el.title.trim() + el.isbn).toLowerCase();

        console.debug(stringBuscado);

        //Buscamos dentro del stringBuscado a ver si se encuentra el parámetro buscado

        return stringBuscado.includes(busqueda);

      });
    }
    return resultadoBusqueda;
  }

}
