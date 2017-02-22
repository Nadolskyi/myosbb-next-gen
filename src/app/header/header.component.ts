import {
  Component,
  OnInit
} from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login/login.service';
@Component({
  selector: 'app-header',
  providers: [ LoginService ],
  templateUrl: './header.html'
})
export class AppHeaderComponent implements OnInit {
  public isLog: boolean;
  public isLoginned: boolean;
  constructor(public loginService: LoginService, public _router: Router
    ) {}
  public ngOnInit(): any {
     this.isLoginned = this.loginService.checkLogin();
  }
  public logOut() {
    localStorage.clear();
    this._router.navigate(['./login']);
  }
}
