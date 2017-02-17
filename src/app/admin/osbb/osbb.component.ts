import {
  Component,
  OnInit
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Http, Response } from "@angular/http";
import { LoginService } from '../../login/login.service';
import { Observable } from "rxjs/Observable";

@Component({
  providers: [LoginService],
  selector: 'osbb',
  templateUrl: './osbb.html',
  styleUrls: ['../styleTables.css'],
})
export class OSBBComponent implements OnInit {
  public localState: any;
  constructor(
    public route: ActivatedRoute,public http:Http,public loginService:LoginService
  ) {}

public getOsbb(){ this.tratata().subscribe(
    data=>{
        let OSBB:any=data.json()
        this.OSBB = OSBB;
      },
    )
  }
  public tratata():Observable<any> {
    if (this.loginService.checkLogin()){
        let options=this.loginService.getRequestOptionArgs();
        let userUrl = 'http://localhost:8080/myosbb/restful/osbb';
        return this.http.get(userUrl,options);
    }
  }
    ngOnInit(): any {
        this.getOsbb();
    }

}
