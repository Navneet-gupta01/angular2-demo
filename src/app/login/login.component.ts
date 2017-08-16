/**
 * Created by navneetgupta on 8/8/17.
 */
import { Component } from '@angular/core';
import { User } from '../app.component';
import { Router } from '@angular/router';
import { Http } from '@angular/http';
import { MenuService } from '../common/shared.services';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./app.component.css']
})
export class LoginComponent {

  user: User = new User();
  title = '';
  constructor(public router: Router, public http: Http, public menuService: MenuService) {}

  submit(): void {
    console.log('On Submit parameters to submit are : '  + JSON.stringify(this.user) );
    // this.http.get('http://localhsot:8080/');
    if (this.user.username === 'Store' && this.user.password === 'qwerty') {
      localStorage.setItem('role', 'store');
      this.router.navigate(['store/home']);
      this.menuService.addToggleEvent.emit(true);
    } else if (this.user.username === 'Admin' && this.user.password === 'qwerty') {
      localStorage.setItem('role', 'admin');
      this.router.navigate(['admin']);
      this.menuService.addToggleEvent.emit(true);
    }
    this.user = new User();
  }
}
