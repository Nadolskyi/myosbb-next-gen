/**
 * Created by stadn on 2/12/2017.
 */
import {
  Component,
  OnInit,
} from '@angular/core';
import { Http, Response } from '@angular/http';
import { myosbbLink } from '../../shared/models/localhost.config';

/*
 * We're loading this component asynchronously
 * We are using some magic with es6-promise-loader that will wrap the module with a Promise
 * see https://github.com/gdi2290/es6-promise-loader for more info
 */

console.log('`Detail` component loaded asynchronously');

@Component({
  selector: 'manager',
  styles: [`
  manager-sidebar-menu {
    /*float: left;*/
  }
`],
  template: `
    <h1>Hello from Manager</h1>
    <manager-sidebar-menu></manager-sidebar-menu>
    <!--
    NOTE:
    contains hardcoded values as at the moment of writing this component osbb requisites 
    and board members details were not implemented - subject of future releases
    -->
<!--<div id="main-content" class="content ">-->
    <!--<div class="panel panel-default pos-top animated slideInRight">-->
        <!--<div *ngIf="osbbRetrieved">-->
            <!--&lt;!&ndash; OSBB contacts and requisites &ndash;&gt;-->
            <!--<div class="row">-->
                <!--<div class="col-md-1"></div>-->
                <!--<div class="col-md-5">-->
                    <!--<h3><strong>{{'contacts' }}</strong></h3>-->
                    <!--<p><h5><strong>{{'headmaster'}}</strong></h5>-->
                    <!--Петров Іван Миколайович <i class="fa fa-phone" aria-hidden="true"></i> (067) 123-45-67-->
                    <!--<p><h5><strong>{{'accountant' }}</strong></h5>-->
                    <!--Іванова Оксана Степанівна <i class="fa fa-phone" aria-hidden="true"></i> (067) 123-45-67-->
                    <!--<p><h5><strong>{{'dispatcher'}}</strong></h5>-->
                    <!--Цілодобово <i class="fa fa-phone" aria-hidden="true"></i> (067) 123-45-67-->
                    <!--<p><h5><strong>{{'doctor'}}</strong></h5>-->
                    <!--Айболит Олег Петрович <i class="fa fa-phone" aria-hidden="true"></i> (067) 123-45-67-->
                <!--</div>-->
                <!--<div class="col-md-5">-->
                    <!--<h3><strong>{{'requisites'}}</strong></h3>-->
                    <!--<p><h5><strong>{{'full_name'}}</strong></h5>-->
                    <!--{{userOsbb.name}}-->
                    <!--<p><h5><strong>{{'address'}}</strong></h5>-->
                    <!--{{userOsbb.address}}-->
                    <!--<p><h5><strong>{{'phone'}}</strong></h5>-->
                    <!--+38 (032) 244 58 86-->
                    <!--<p><h5><strong>{{'EDRPOU'}}</strong></h5>-->
                    <!--34566773-->
                    <!--<p><h5><strong>{{'MFO'}}</strong></h5>-->
                    <!--123456-->
                    <!--<p><h5><strong>{{'bank_account'}}</strong></h5>-->
                    <!--49000012345678 в КБ "УКРСИББАНК"        -->
                <!--</div>-->
                <!--<div class="col-md-1"></div>-->
            <!--</div><br/>-->
            <!--&lt;!&ndash; Board members and their contacts &ndash;&gt;-->
            <!--<div>-->
                <!--<h3 class="text-center"><strong>{{'board'}}</strong></h3>-->
                <!--<div class="row">-->
                    <!--<div class="col-md-1"></div>-->
                    <!--<div class="col-md-10">-->
                        <!--<table class="table table-striped table-bordered">-->
                            <!--<thead>-->
                                <!--<tr>-->
                                    <!--<th class="text-center">{{'PIB' }}</th>-->
                                    <!--<th class="text-center">{{'apartment'}}</th>-->
                                    <!--<th class="text-center">{{'contacts'}}</th>-->
                                    <!--<th class="text-center">{{'photo'}}</th>-->
                                <!--</tr>-->
                            <!--</thead>-->
                            <!--<tbody>-->
                                <!--<tr>-->
                                    <!--<td colspan="4" class="text-center"><strong>{{'CEO'}}</strong></td>-->
                                <!--</tr>-->
                                <!--<tr>-->
                                    <!--<td>Петров Іван Миколайович</td>-->
                                    <!--<td class="text-center">24</td>-->
                                    <!--<td class="text-center">(067) 333 44 44</td>-->
                                    <!--<td class="text-center"><img src="assets/img/simpson.jpg" height="40px" width="40px" alr="photo"/></td>-->
                                <!--</tr>-->
                                <!--<tr>-->
                                    <!--<td colspan="4" class="text-center"><strong>{{'board_members'}}</strong></td>-->
                                <!--</tr>-->
                                <!--<tr>-->
                                    <!--<td>Іванова Олена Степанівна</td>-->
                                    <!--<td class="text-center">34</td>-->
                                    <!--<td class="text-center">(067) 333 44 45</td>-->
                                    <!--<td class="text-center"><img src="assets/img/ui-divya.jpg" height="40px" width="40px" alr="photo"/></td>-->
                                <!--</tr>-->
                                <!--<tr>-->
                                    <!--<td>Зайченко Петро Андрійович</td>-->
                                    <!--<td class="text-center">57</td>-->
                                    <!--<td class="text-center">(067) 333 44 46</td>-->
                                    <!--<td class="text-center"><img src="assets/img/ui-sherman.jpg" height="40px" width="40px" alr="photo"/></td>-->
                                <!--</tr>-->
                                <!--<tr>-->
                                    <!--<td>Столяров Михайло Іванович</td>-->
                                    <!--<td class="text-center">83</td>-->
                                    <!--<td class="text-center">(067) 333 44 47</td>-->
                                    <!--<td class="text-center"><img src="assets/img/ui-zac.jpg" height="40px" width="40px" alr="photo"/></td>-->
                                <!--</tr>-->
                            <!--</tbody>-->
                        <!--</table>-->
                    <!--</div>-->
                    <!--<div class="col-md-1"></div>-->
                <!--</div>-->
            <!--</div>-->
        <!--</div>-->
    <!--</div>-->
<!--</div>-->
    <router-outlet></router-outlet>
  `,
})
export class ManagerComponent {

}
