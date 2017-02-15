import {
  Component,
  OnInit
} from '@angular/core';
import {LoginService} from "./login.service";
import { AppState } from '../app.service';
//import {ApiService} from "./api.service";
import {Router} from "@angular/router";
import {User} from './User'
import {Observable} from "rxjs/Observable";
//import {HttpClient} from "./HttpClient";
import {Http, Request, RequestOptionsArgs, Response, RequestOptions, ConnectionBackend, Headers} from '@angular/http';
@Component({
  // The selector is what angular internally uses
  // for `document.querySelectorAll(selector)` in our index.html
  // where, in this case, selector is the string 'home'
  selector: 'login',  // <home></home>
  // We need to tell Angular's Dependency Injection which providers are in our app.
  providers: [LoginService
  ],
  // Our list of styles in our component. We may add more to compose many styles together
  styleUrls: [ '../../assets/css/login/login.css' ],
  // Every Angular template is first compiled by the browser before Angular runs it's compiler
  templateUrl: './login.component.html',
  outputs: ['isLoggedIn']
})
export class LoginComponent implements OnInit {
  // Set our default values
ngOnInit():any {
        this.isLoggedIn = this.loginService.checkLogin();
    }
  
  public localState = { value: '' };
  
  // TypeScript public modifiers
  constructor(
    public appState: AppState,private http:Http,private loginService:LoginService, private _router:Router
  ) {}


  public submitState(value: string) {
  }
  private tokenName:string = "access_token";
  private _pathUrl = 'http://localhost:8080/myosbb';
  private model={'username':'','password':''};
  public  decodeAccessToken(access_token:string) {
        return JSON.parse(window.atob(access_token.split('.')[1]));
    }
  private role:string = "";
  private isLoggedIn:boolean;
  private logInError:boolean = false;
  public currentUser:User

  setUser(user:User) {
        this.currentUser = user;
    }
    

    getRole():string {
        return this.role;
    }

    setRole() {
        if (this.loginService.checkLogin()) {
            this.role = this.decodeAccessToken(localStorage.getItem("access_token"))["authorities"][0];
        }
    }

    
  onSubmit(){
   
    console.log(Headers);
    console.log('Логін'+' '+this.model.username);
    console.log('Пароль'+' '+this.model.password);
    this.loginService.sendCredentials(this.model).subscribe(

            data => {
              if (!this.loginService.checkLogin()) {
                console.log("sendktoen");
                    this.tokenParseInLocalStorage(data.json());
                    this.loginService.sendToken().subscribe(
                        data=> {
                          console.log('Fucking animal2');
                            let user:User = <User>data.json();
                            this.setUser(user);
                            this.model.username = "";
                            this.model.password = "";
                            this.isLoggedIn = true;
                            this.setRole();
                            console.log('Fucking animal');
                            console.log(this.getRole());
                            if (this.getRole() === "ROLE_USER") {
                                
                                this._router.navigate(['home']);
                            }
                            if (this.getRole() === "ROLE_ADMIN") {
                                
                                this._router.navigate(['/']);
                            }
                            if (this.getRole() === "ROLE_MANAGER") {
                                
                                this._router.navigate(['manager']);
                            }
                        }
                    )
               }     
            },
            
            () => console.log('Sending credentials completed')
        )
  }
  tokenParseInLocalStorage(data:any) { 
        localStorage.setItem("access_token", data.access_token);
        localStorage.setItem("token_type", data.token_type);
        localStorage.setItem("expires_in", new Date().setSeconds(data.expires_in));
        localStorage.setItem("scope", data.scope);
        localStorage.setItem("jti", data.jti);
        localStorage.setItem("refresh_token", data.refresh_token);
    }
}
