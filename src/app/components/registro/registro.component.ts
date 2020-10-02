import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Usuario } from 'src/app/shared/dto/Usuario';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  usuario: Usuario = new Usuario();
  constructor(private usuarioService: UsuarioService, private router: Router) { }

  ngOnInit() {

  }

  registrar(){
    console.log(this.usuario);
    this.usuarioService.addUser(this.usuario).subscribe(res=>{
      if(res){
        Swal.fire('Gracias por registrarce', '', 'success');
        this.router.navigate(['/'])
      }

    });
  }

}
