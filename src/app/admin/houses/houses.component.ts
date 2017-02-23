import {
  Component,
  OnInit,
  ViewChild
} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Http, Response } from "@angular/http";
import { LoginService } from '../../login/login.service';
import { HousesService } from './houses.service';
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/switchMap';

@Component({
  providers: [LoginService, HousesService],
  selector: 'houses',
  templateUrl: './houses.html',
  styleUrls: ['../styleTables.css'],
})
export class HousesComponent implements OnInit {
  public localState: any;
  public houses: string[];
  public houseId: number;

  constructor(
    public route: ActivatedRoute,public http:Http,public loginService:LoginService,private router: Router,private housesService: HousesService,
  ) {}

  onNavigate(id: number) {
          this.router.navigate(['./admin/houses/house', id]);
        }
    
  ngOnInit() {
    this.housesService.getHouses().subscribe(data => {
      this.houses = data;
    })
   }
 }