import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Usuario } from 'src/app/shared/dto/Usuario';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  usuario: Usuario = new Usuario();
  constructor(private usuarioService: UsuarioService) { }

  ngOnInit() {

  }

  registrar(){
    console.log(this.usuario);
    this.usuarioService.addUser(this.usuario).subscribe(res=>{
      console.log(res);
    });
  }

}
