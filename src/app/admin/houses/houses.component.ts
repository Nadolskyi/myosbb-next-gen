import {
  Component,
  OnInit,
  ViewChild
} from '@angular/core';
import { ModalDirective } from "ng2-bootstrap";
import { Router, ActivatedRoute } from '@angular/router';
import { Http, Response } from "@angular/http";
import { LoginService } from '../../login/login.service'
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/switchMap';

@Component({
  providers: [LoginService],
  selector: 'houses',
  templateUrl: './houses.html',
  styleUrls: ['../styleTables.css'],
})
export class HousesComponent implements OnInit {
  public localState: any;
  public houses: string[];
  public houseId: number;
  @ViewChild('delModal') private delModal: ModalDirective;

  constructor(
    public route: ActivatedRoute,public http:Http,public loginService:LoginService,private router: Router,
  ) {}
public openDelModal(houseId: number) {
        this.houseId = houseId;
        this.delModal.show();
    }
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
  
    onNavigate(id: number) {
          this.router.navigate(['./admin/houses/house', id]);
        }
    ngOnInit(): any {
        this.getHouses();
    }
 }
