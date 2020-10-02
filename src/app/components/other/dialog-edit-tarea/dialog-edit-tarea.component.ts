import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Tarea } from 'src/app/shared/dto/Tarea';

@Component({
  selector: 'app-dialog-edit-tarea',
  templateUrl: './dialog-edit-tarea.component.html',
  styleUrls: ['./dialog-edit-tarea.component.css']
})
export class DialogEditTareaComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: Tarea) { }

  ngOnInit(): void {
  }

  
}
