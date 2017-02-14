import {
  Component,
  OnInit
} from '@angular/core';
import {LoginService} from "./login.service";
import { AppState } from '../app.service';
//import {ApiService} from "./api.service";
import {Router} from "@angular/router";

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
 // private _router:Router, private loginService:LoginService, private _currentUserService:CurrentUserService;
  // TypeScript public modifiers
  constructor(
    public appState: AppState,private http:Http,private loginService:LoginService, 
  ) {}


// constructor(private _router:Router, private loginService:LoginService
//         , private _currentUserService:CurrentUserService) {
//     }



//   ngOnInit():any {
//         this.isLoggedIn = this.loginService.checkLogin();
//     }



  
  public submitState(value: string) {
  }
   private tokenName:string = "access_token";
  private _pathUrl = 'http://localhost:8080/myosbb';
  private model={'username':'','password':''};
  private role:string = "";
  private isLoggedIn:boolean;
  private logInError:boolean = false;

    

    getRole():string {
        return this.role;
    }

    setRole() {
        if (this._loginservice.checkLogin()) {
            this.role = this.decodeAccessToken(localStorage.getItem("access_token"))["authorities"][0];
        }
    }

    // post(url:string, body:string, options?:RequestOptionsArgs):Observable<Response> {
    //     options = this.getRequestOptionArgs(options, url);
    //     options.method = "POST";
    //     console.log('Пароль');
    //     return this.intercept(super.post(url, body, options));
    // }
    getRequestOptionArgs(options?:RequestOptionsArgs, url?:string):RequestOptionsArgs {
        if (options == null) {
            options = new RequestOptions();
        }
        if (options.headers == null) {
            options.headers = new Headers();
        }
        if ((localStorage.getItem(this.tokenName) != null) && (localStorage.getItem(this.tokenName) != "")) {
            if (!options.headers.has("Authorization")) {
                options.headers.delete('Authorization');
                options.headers.append('Authorization', 'Bearer ' + localStorage.getItem(this.tokenName));
            } if(!options.headers.has("Content-Type"))
            options.headers.append('Content-Type', `application/json`);
        } else {
            options.headers.append('Authorization', `Basic  Y2xpZW50YXBwOjEyMzQ1Ng==`);
            if (!options.headers.has("Content-Type")) {
                options.headers.append('Content-Type', `application/x-www-form-urlencoded`);
                options.headers.append('Accept', `application/json`);
            }
        }
        return options;
    }

    intercept(observable:Observable<Response>):Observable<Response> {
        return observable.catch((err, source) => {
            if (err.status == 401) {
                this._router.navigate(['/login']);
                localStorage.clear();
                return Observable.empty();
            } else {
                return Observable.throw(err);
            }
        });

    }
createAuthorizationHeader(headers: Headers) {
    headers.append('Authorization', `Basic  Y2xpZW50YXBwOjEyMzQ1Ng==`); 
  }
post(url, data) {
    let headers = new Headers();
    this.createAuthorizationHeader(headers);
    console.log(url);
    return this.http.post(url, data, {
      headers: headers
    });
  }
  onSubmit(){
   // this.post('http://localhost:8080/myosbb/restful/settings','Basic  Y2xpZW50YXBwOjEyMzQ1Ng==');
    console.log('Логін'+' '+this.model.username);
    console.log('Пароль'+' '+this.model.password);
    this.loginService.sendCredentials(this.model).subscribe(

            data => {
              if (!this.loginService.checkLogin()) {
                console.log("sendktoen");
                    this.tokenParseInLocalStorage(data.json());
                    this.loginService.sendToken().subscribe(
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
