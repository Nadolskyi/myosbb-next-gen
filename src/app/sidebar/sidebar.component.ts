import {
  Component,
  OnInit
} from '@angular/core';
import { LoginService } from '../login/login.service';

@Component({
  selector: 'sidebar-component',
  templateUrl:'./sidebar.html',
  providers: [LoginService],
  styleUrls: ['./sidebar.style.css']

})
export class SidebarComponent implements OnInit{
 public ngOnInit(): any {
  	let authRole: string;
  	this.loginService.setRole();
    authRole = this.loginService.getRole();
    console.log(authRole);
  }
  constructor(
    public loginService: LoginService
  ) {}  
}