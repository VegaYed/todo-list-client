import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ListaTareasComponent } from './components/other/lista-tareas/lista-tareas.component';
import { RegistroComponent } from './components/registro/registro.component';
import { InicioComponent } from './components/shared/inicio/inicio.component';
import { AuthGuard } from './shared/guard/auth.guard';

const routes: Routes = [
  {path:'', component: LoginComponent },
  {path:'registro', component: RegistroComponent },
  {path:'inicio', component: InicioComponent, canActivate:[AuthGuard],
      children:[
        {path:'', component:ListaTareasComponent},
        {path:'categoria/:idCategoria', component: ListaTareasComponent}
      ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
