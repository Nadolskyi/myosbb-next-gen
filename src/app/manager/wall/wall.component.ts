/**
 * Created by stadn on 2/12/2017.
 */
import {
  Component,
  OnInit
} from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { myosbbLink } from '../../../shared/models/localhost.config';
import { WallService } from './wall.service';

@Component({
  selector: 'wall',
  providers: [WallService],
  styleUrls: ['../../../assets/css/manager.page.layout.scss'],
  templateUrl: './wall.template.html'
})
export class WallComponent implements OnInit {
  public resData: any;
  constructor(
    public http: Http,
    public wall: WallService
  ) {}
  public ngOnInit() {
    this.wall.somemethod(4).subscribe(data => {
      this.resData = data;
    });
  }
}
