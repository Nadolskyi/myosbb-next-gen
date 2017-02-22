/*
 * Angular 2 decorators and services
 */
import {
  Component,
  OnInit,
  ViewEncapsulation
} from '@angular/core';
import { LoginService } from './login/login.service';
import { Router } from '@angular/router';
import { AppState } from './app.service';

@Component({
  selector: 'app',
  providers: [ LoginService ],
  encapsulation: ViewEncapsulation.None,
  styleUrls: [
    './app.component.scss',
    '../assets/css/default.style.scss'
  ],
  templateUrl: './app.html'
})
export class AppComponent implements OnInit {
  public angularclassLogo = 'assets/img/favicon.ico';
  public name = 'Наш Двір';
  public url = 'https://twitter.com/AngularClass';

  constructor(public loginService: LoginService, public _router: Router,
              public appState: AppState) {}
  public ngOnInit() {
    if (this.loginService.checkLogin()) {
      this._router.navigate(['./common']);
    }else {
      this._router.navigate(['./login']);
    }
  }
}
