import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtroLibro'
})
export class FiltroLibroPipe implements PipeTransform {


  /**
   * Filtro que permite buscar por título y por ISBN de un libro
   * @param libros array con todos los libros
   * @param busqueda string con la busqueda que realiza el usuario
   */
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
