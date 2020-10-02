import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { URL_API } from '../consts/const';
import { Tarea } from '../shared/dto/Tarea';
import { TareaCategoria } from '../shared/dto/TareaCategoria';

@Injectable({
  providedIn: 'root'
})
export class TareaService {

  constructor(private http: HttpClient) { }

  getAll(){
    return this.http.get<Tarea[]>(URL_API+'/tareas');
  }

  addTarea(tarea: TareaCategoria){
    return this.http.post(URL_API+'/tarea',tarea);
  }

  delete(tarea: Tarea){
    return this.http.delete(URL_API+'/tarea/'+tarea.idtarea);
  }
}  
