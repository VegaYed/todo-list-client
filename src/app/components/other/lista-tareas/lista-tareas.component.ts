import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TareaService } from 'src/app/services/tarea.service';
import { Tarea } from 'src/app/shared/dto/Tarea';
import Swal from 'sweetalert2';
import { DialogEditTareaComponent } from '../dialog-edit-tarea/dialog-edit-tarea.component';

@Component({
  selector: 'app-lista-tareas',
  templateUrl: './lista-tareas.component.html',
  styleUrls: ['./lista-tareas.component.css']
})
export class ListaTareasComponent implements OnInit {

  lista: Tarea[] =[];

  constructor(private tareaService: TareaService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.cargarTareas();
  }
  
  cargarTareas(){
    this.tareaService.getAll().subscribe(res=>{
      this.lista = res;
    }, error=>{console.log(error)});
  }
  agregar($event){    // recibe la tarea nueva desde el componente Nueva tarea
    console.log("DESDE LISTAR", $event);
    let ntar= $event;
    this.lista.push(ntar);  
  }

  editar(tarea){
    const dial = this.dialog.open(DialogEditTareaComponent,{data: tarea});

    dial.afterClosed().subscribe(res=>{
      console.log("Luego de cerrar", res);
    })
  }

  eliminar(t: Tarea){
    Swal.fire({
      title: 'Deseas eliminar la tarea?',
      text: '',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Si, Eliminar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.value) {
        this.tareaService.delete(t).subscribe(res=>{
          this.lista.splice(this.lista.indexOf(t), 1);    // elimina de la lista que se muestra
          Swal.fire( 'Tarea Eliminada!','','success');
        }, error=>{console.log(error)})
      } 
    })
  }

}
