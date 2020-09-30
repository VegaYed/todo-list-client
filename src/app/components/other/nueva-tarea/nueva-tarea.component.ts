import { Component, OnInit } from '@angular/core';
import { TareaService } from 'src/app/services/tarea.service';
import { Tarea } from 'src/app/shared/dto/Tarea';

@Component({
  selector: 'app-nueva-tarea',
  templateUrl: './nueva-tarea.component.html',
  styleUrls: ['./nueva-tarea.component.css']
})
export class NuevaTareaComponent implements OnInit {

  tarea: Tarea= new Tarea();
  constructor(private tarService: TareaService) { }

  ngOnInit(): void {
    this.tarService.addTarea(this.tarea).subscribe(res=>{
      console.log(res);
    });
  }

}
