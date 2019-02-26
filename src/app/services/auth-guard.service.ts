import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate } from '@angulaR/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {
  constructor(private auth: AuthService) {}

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    console.log(next);
    if (this.auth.isAuthenticated() || localStorage.getItem('isLoggedIn') === 'true') {
      console.log('Paso el guard');

      return true;
    } else {
      console.log('Bloqueado por el guard');
      return false;
    }
  }
}
