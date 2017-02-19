import {
  Component,
  OnInit
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Http, Response } from "@angular/http";
import { LoginService } from '../../../login/login.service'
import { Observable } from "rxjs/Observable";
import { Subscription } from "rxjs";

@Component({
  providers: [LoginService],
  selector: 'house',
  templateUrl: './house.html',
  styleUrls: ['../../styleTables.css'],
})
export class HouseAboutComponent implements OnInit {
  public localState: any;
  constructor(
    public route: ActivatedRoute, public http:Http,public loginService:LoginService
  ) {}

public getHouses(){ this.tratata().subscribe(
    data=>{
        let house:any=data.json()
        this.house = Array.of(house);
      },
    )
  }
  public tratata():Observable<any> {
    if (this.loginService.checkLogin()){
        let options=this.loginService.getRequestOptionArgs();
        let userUrl = 'http://localhost:8080/myosbb/restful/house/45';
        return this.http.get(userUrl,options);
    }
  }
    ngOnInit(): any {
        this.getHouses();
    }

}