import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Usuario } from 'src/app/shared/dto/Usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario: Usuario = new Usuario();
  constructor(private usuarioService: UsuarioService, private router: Router) { }

  ngOnInit(): void {
  }
  login(){
    this.usuarioService.login(this.usuario).subscribe(res=>{
      console.log(res);
      this.router.navigate(['/inicio']);
    });
  }

}
