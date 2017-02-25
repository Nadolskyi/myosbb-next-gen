import {
  Component,
  OnInit,
  ViewEncapsulation
} from '@angular/core';
import { AppState } from './app.service';
import { Router } from '@angular/router';
import { LoginService } from './shared/login/login.service';

@Component({
  selector: 'app',
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
  public authRole: string;
  constructor(
    public appState: AppState,
    public _router: Router,
    public loginService: LoginService
  ) { }
  public ngOnInit() {
    this.loginService.setRole();
    this.authRole = this.loginService.getRole();
    this.loginService.switchRole(this.authRole);
  }
}
