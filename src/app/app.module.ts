import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { SidebarComponent } from './components/shared/sidebar/sidebar.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { CategoriasComponent } from './components/other/categorias/categorias.component';
import { NuevaTareaComponent } from './components/other/nueva-tarea/nueva-tarea.component';
import { ListaTareasComponent } from './components/other/lista-tareas/lista-tareas.component';
import { InicioComponent } from './components/shared/inicio/inicio.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SidebarComponent,
    HeaderComponent,
    CategoriasComponent,
    NuevaTareaComponent,
    ListaTareasComponent,
    InicioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
