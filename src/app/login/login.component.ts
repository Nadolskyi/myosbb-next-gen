import {
  Component,
  OnInit
} from '@angular/core';
import {LoginService} from "./login.service";
import { AppState } from '../app.service';
//import {ApiService} from "./api.service";
import {Router} from "@angular/router";
import {Http, Response, Headers} from "@angular/http";
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
  public localState = { value: '' };
 // private _router:Router, private loginService:LoginService, private _currentUserService:CurrentUserService;
  // TypeScript public modifiers
  constructor(
    public appState: AppState,private http:Http,
  ) {}


// constructor(private _router:Router, private loginService:LoginService
//         , private _currentUserService:CurrentUserService) {
//     }



//   ngOnInit():any {
//         this.isLoggedIn = this.loginService.checkLogin();
//     }



  
  public submitState(value: string) {
  }
  private _loginservice:LoginService,
  private _pathUrl = 'http://localhost:8080/myosbb';
  private model={'username':'','password':''};
  private role:string = "";
  private isLoggedIn:boolean;
  private logInError:boolean = false;

    setUser(user:User) {
        this.currentUser = user;
    }

    setUserPromise(user:User) {
        this.currentUser = user;
        return this.currentUser;
    }

    getUser():User {
        return this.currentUser;
    }

    initUser():User {
        if (this._loginservice.checkLogin()) {
            this._loginservice.sendToken().subscribe(data=> {
                this.setUser(data);
            })
        }
    }

    getRole():string {
        return this.role;
    }

    setRole() {
        if (this._loginservice.checkLogin()) {
            this.role = this.decodeAccessToken(localStorage.getItem("access_token"))["authorities"][0];
        }
    }

  sendCredentials(model) {
        console.log('Authentication pending...');
        console.log(this._pathUrl);
        let tokenUrl = this._pathUrl + "/oauth/token";
        console.log(tokenUrl);
        let data = 'username=' + encodeURIComponent(model.username) + '&password='
            + encodeURIComponent(model.password) + '&grant_type=password';
           // HeaderComponent.currentUser = 
           console.log(data);
           console.log(this.http.post(tokenUrl, data));
        return this.http.post(tokenUrl, data);
        console.log(tokenUrl);
    }

    //sends token to SERVERS PROTECTED RESOURCES if THIS ONE WILL PASS EVERYTHING IS WORKING
    sendToken():Observable<any> {
        let userUrl = this._pathUrl + "/restful/user/getCurrent";
        return this.http.get(userUrl);
    }

  onSubmit(){
    console.log('Логін'+' '+this.model.username);
    console.log('Пароль'+' '+this.model.password);
    this.sendCredentials(this.model).subscribe(
            data => {
                    this.tokenParseInLocalStorage(data.json());
                    this.sendToken().subscribe(
                        data=> {
                            let user:User = <User>data.json();
                            this.setUser(user);
                            this.model.username = "";
                            this.model.password = "";
                            this.isLoggedIn = true;
                            this.setRole();
                            console.log(this.getRole());
                            if (this.getRole() === "ROLE_USER") {
                                
                                this._router.navigate(['home']);
                            }
                            if (this.getRole() === "ROLE_ADMIN") {
                                
                                this._router.navigate(['admin']);
                            }
                            if (this.getRole() === "ROLE_MANAGER") {
                                
                                this._router.navigate(['manager']);
                            }
                        }
                    )
            },
            err => {
                this.model.password = "";
                this.handleErrors(err);
            },
            () => console.log('Sending credentials completed')
        )
  }


}
