import { Component, OnInit } from '@angular/core';
import { TareaService } from 'src/app/services/tarea.service';
import { Categoria } from 'src/app/shared/dto/Categorias';
import { Tarea } from 'src/app/shared/dto/Tarea';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-lista-tareas',
  templateUrl: './lista-tareas.component.html',
  styleUrls: ['./lista-tareas.component.css']
})
export class ListaTareasComponent implements OnInit {

  lista: Tarea[];

  constructor(private tareaService: TareaService) { }

  ngOnInit(): void {
   /*  this.tareaService.getAll().subscribe(res=>{
      this.lista = res;
    }); */
  }

  eliminar(){
    Swal.fire({
      title: 'Deseas eliminar la tarea?',
      text: '',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Si, Eliminar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.value) {
        Swal.fire(
          'Tarea Eliminada!',
          '',
          'success'
        )
      } 
    })
  }

}
