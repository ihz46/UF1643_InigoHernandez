import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Imports de angular
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

//Imports de componentes creados
import { LibrosComponent } from './paginas/libros/libros.component';
import { FiltroLibroPipe } from './filtros/libro-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LibrosComponent,
    FiltroLibroPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
