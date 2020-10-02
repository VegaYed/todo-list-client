import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UsuarioService } from 'src/app/services/usuario.service';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate {

  constructor(private userSevice: UsuarioService, private router: Router){}
  canActivate(): boolean {
    if(!this.userSevice.isLogged()){ // si existe token
      Swal.fire('No estas loggeado!!', '', 'error');
      this.router.navigate(['/']);
    }
    return this.userSevice.isLogged();
  }
  
}
