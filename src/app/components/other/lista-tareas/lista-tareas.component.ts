import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
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

  constructor(private tareaService: TareaService
    , public dialog: MatDialog
    , private route: ActivatedRoute) { }

  ngOnInit(): void {
    
    this.cargarTareas();
    this.route.params.subscribe(res=>{    // obtiene id de la ruta, para mostrar tareas de una categoria
      if(res.idCategoria){
        this.tareaService.getTareasCategoria(res.idCategoria).subscribe(resp=>{
          this.lista = resp;
          console.log("mostrandoo...", this.lista);
        })
      }
    });
  }
  
  cargarTareas(){
    this.tareaService.getAll().subscribe(res=>{
      this.lista = res;
      console.log(res);
    }, error=>{console.log(error)});
  }
  agregar($event){    // recibe la tarea nueva desde el componente Nueva tarea
    let nuevaTar= $event;
    this.lista.push(nuevaTar);  
  }

  editar(tarea){
    const dial = this.dialog.open(DialogEditTareaComponent,{data: tarea});

    dial.afterClosed().subscribe(res=>{
      console.log("Luego de cerrar", res);
      this.tareaService.edit(res).subscribe(resp=>{
        console.log("Tarea editada:", resp);
      });
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
