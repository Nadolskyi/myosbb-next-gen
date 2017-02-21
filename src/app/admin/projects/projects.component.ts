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
  selector: 'projects',
  templateUrl: './projects.html',
  styleUrls: ['../styleTables.css'],
})
export class ProjectsComponent implements OnInit {
  public localState: any;
  public projects: string[];

  constructor(
    public route: ActivatedRoute,public http:Http,public loginService:LoginService
  ) {}

public getProject(){ this.tratata().subscribe(
    data=>{
        let projects:any=data.json()
        this.projects = projects;
      },
    )
  }
  public tratata():Observable<any> {
    if (this.loginService.checkLogin()){
        let options=this.loginService.getRequestOptionArgs();
        let userUrl = 'http://localhost:8080/myosbb/restful/ticket/';
        return this.http.get(userUrl,options);
    }
  }
    ngOnInit(): any {
        this.getProject();
    }

}
