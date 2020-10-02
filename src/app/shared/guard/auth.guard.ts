import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UsuarioService } from 'src/app/services/usuario.service';

@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate {

  constructor(private userSevice: UsuarioService, private router: Router){}
  canActivate(): boolean {
    if(this.userSevice.isLogged()){ // si existe token
      this.router.navigate(['/']);
    }
    return this.userSevice.isLogged();
  }
  
}
