import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { InfopageService } from '../services/infopage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor( private auth: InfopageService, private router: Router ) {}

  canActivate(): boolean {
    if (this.auth.estaAutenticado()) {
      return true;
    } else {
      this.router.navigateByUrl('/inicio');
      return false;
    }
  }

}
