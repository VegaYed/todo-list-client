import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TareaService } from 'src/app/services/tarea.service';
import { Tarea } from 'src/app/shared/dto/Tarea';
import { TareaCategoria } from 'src/app/shared/dto/TareaCategoria';
import Swal from 'sweetalert2';
import { ListaTareasComponent } from '../lista-tareas/lista-tareas.component';

@Component({
  selector: 'app-nueva-tarea',
  templateUrl: './nueva-tarea.component.html',
  styleUrls: ['./nueva-tarea.component.css']
})
export class NuevaTareaComponent implements OnInit {

  tarea: Tarea= new Tarea();
  @Output() tareaEmmiter = new EventEmitter<Tarea>();
  
  constructor(private tarService: TareaService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.tarea.fechaRealizacion = new Date();  // setea la fecha de hoy 
  }

  agregar(){
    let newTarea : TareaCategoria = {
      tarea: this.tarea,
      categorias: [{id: 1, categoria:'base de datos'}]
    };
    /* this.tareaEmmiter.emit(this.tarea);
    this.tarea = new Tarea(); */
    this.tarService.addTarea(newTarea).subscribe(res=>{
      console.log("Nueva:::::", res);
      Swal.fire('Nueva tarea Agregada!', '', 'success');
      this.tareaEmmiter.emit(<Tarea>res);  // envia objeto para agregar al componente lista
    })
  }

}
