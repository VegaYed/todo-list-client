import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { URL_API } from '../consts/const';
import { Categoria } from '../shared/dto/Categorias';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {


  constructor(private http: HttpClient) { }

  readAll() : Observable<any>{
    return this.http.get(URL_API+'/categorias');
  }
  add(categoria: Categoria){
    return this.http.post<Categoria>(URL_API+'/categoria', categoria);
  }
  delete(categoria: Categoria){
    return this.http.delete(URL_API+'/categoria/'+categoria.id);
  }
}
