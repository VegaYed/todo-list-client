import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { SidebarComponent } from './components/shared/sidebar/sidebar.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { CategoriasComponent } from './components/other/categorias/categorias.component';
import { NuevaTareaComponent } from './components/other/nueva-tarea/nueva-tarea.component';
import { ListaTareasComponent } from './components/other/lista-tareas/lista-tareas.component';
import { InicioComponent } from './components/shared/inicio/inicio.component';
import { FiltrosComponent } from './components/other/filtros/filtros.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MomentModule } from 'ngx-moment';

/* Material */
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatIconModule} from '@angular/material/icon';
import {MatTableModule} from '@angular/material/table';
import { FormsModule } from '@angular/forms';
import {MatDialogModule} from '@angular/material/dialog';
/* ====== */

import 'moment/locale/es';
import { DialogCategoriasComponent } from './components/other/dialog-categorias/dialog-categorias.component';
import { DialogEditTareaComponent } from './components/other/dialog-edit-tarea/dialog-edit-tarea.component'; // momentjs en español
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SidebarComponent,
    HeaderComponent,
    CategoriasComponent,
    NuevaTareaComponent,
    ListaTareasComponent,
    InicioComponent,
    FiltrosComponent,
    DialogCategoriasComponent,
    DialogEditTareaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MomentModule,
    /*  Material*/
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatIconModule,
    MatTableModule,
    MatDialogModule
    /* ==== */
  ],
  providers: [
    MatDatepickerModule,
    MatNativeDateModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
