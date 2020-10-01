import { Component, OnInit } from '@angular/core';
import { TareaService } from 'src/app/services/tarea.service';
import { Tarea } from 'src/app/shared/dto/Tarea';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-nueva-tarea',
  templateUrl: './nueva-tarea.component.html',
  styleUrls: ['./nueva-tarea.component.css']
})
export class NuevaTareaComponent implements OnInit {

  tarea: Tarea= new Tarea();
  constructor(private tarService: TareaService) { }

  ngOnInit(): void {
    this.tarea.fechaRealizacion = new Date();
    this.tarService.addTarea(this.tarea).subscribe(res=>{
      console.log(res);
    });
  }

  agregar(){
    console.log(this.tarea);
    this.tarService.addTarea(this.tarea).subscribe(res=>{
      Swal.fire('Nueva tarea Agregada!', '', 'success');
    })
  }

}
