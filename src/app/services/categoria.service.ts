import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {


  constructor(private http: HttpClient) { }

  readAll() : Observable<any>{
    return this.http.get('http://e18ca36c7a37.ngrok.io/categorias');
  }
}
