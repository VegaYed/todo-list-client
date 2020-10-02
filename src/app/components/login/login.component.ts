import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Usuario } from 'src/app/shared/dto/Usuario';
import Swal from 'sweetalert2';

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
      let resp = <any>res;
      if(resp == null){
        return Swal.fire('Error al iniciar sesion', 'Verifica tu password o usuario', 'error')
      }
      this.usuarioService.setToken(resp.token);
      console.log("Loggeado");
      this.router.navigate(['inicio']);
    });
  }

}
