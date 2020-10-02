import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { URL_API } from '../consts/const';
import { Usuario } from '../shared/dto/Usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  token = '';
  constructor(private http: HttpClient, private router: Router) { }

  addUser(usuario: Usuario){
    return this.http.post(URL_API+'/user', usuario);
  }

  login(usuario: Usuario){
    return this.http.post(URL_API+'/login', usuario);
  }
  getToken(){
    return localStorage.getItem('token');
  }
  setToken(token){
    localStorage.setItem('token', token);
  }

  isLogged(): boolean{
    return this.getToken() !=null;  // si existe token
  }

  logout(){
    localStorage.removeItem('token');
    this.router.navigate(['/']);
    console.log("chao");
  }

}
