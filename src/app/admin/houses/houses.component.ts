import {
  Component,
  OnInit
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Http, Response } from "@angular/http";
import { LoginService } from '../../login/login.service'
import { Observable } from "rxjs/Observable";

@Component({
  providers: [LoginService],
  selector: 'houses',
  templateUrl: './houses.html',
  styleUrls: ['../styleTables.css'],
})
export class HousesComponent implements OnInit {
  public localState: any;
  constructor(
    public route: ActivatedRoute,public http:Http,public loginService:LoginService
  ) {}

public getHouses(){ this.tratata().subscribe(
    data=>{
        let houses:any=data.json()
        this.houses = houses;
      },
    )
  }
  public tratata():Observable<any> {
    if (this.loginService.checkLogin()){
        let options=this.loginService.getRequestOptionArgs();
        let userUrl = 'http://localhost:8080/myosbb/restful/house/all';
        return this.http.get(userUrl,options);
    }
  }
    ngOnInit(): any {
        this.getHouses();
    }

}
