/**
 * New typescript file
 */
import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';


@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate() {
    if (localStorage.getItem('role') === 'admin') {
      return true;
    }

    this.router.navigate(['/login']);
    return false;
  }
}
