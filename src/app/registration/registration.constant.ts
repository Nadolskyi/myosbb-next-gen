import { ApiService } from '../shared/login/api.service';

export class RegistrationConstants {
  public static get Masks() {
    return {
      textMask:  [/[A-zА-яІ-і]/,
      /[A-zА-яІ-і]/, /[A-zА-яІ-і]/, /[A-zА-яІ-і]/, /[A-zА-яІ-і]/,
      /[A-zА-яІ-і]/, /[A-zА-яІ-і]/, /[A-zА-яІ-і]/, /[A-zА-яІ-і]/,
      /[A-zА-яІ-і]/, /[A-zА-яІ-і]/, /[A-zА-яІ-і]/, /[A-zА-яІ-і]/,
      /[A-zА-яІ-і]/, /[A-zА-яІ-і]/, /[A-zА-яІ-і]/, /[A-zА-яІ-і]/,
      /[A-zА-яІ-і]/, /[A-zА-яІ-і]/, /[A-zА-яІ-і]/, /[A-zА-яІ-і]/,
      /[A-zА-яІ-і]/, /[A-zА-яІ-і]/, /[A-zА-яІ-і]/, /[A-zА-яІ-і]/],
      phoneMask: ['+' , '3', '8' , '(', /[0]/, /\d/, /\d/, ')', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/],
      alphabet: ['a' , 'b' , 'c' , 'd' , 'e' , 'f' , 'g' , 'h' , 'i' , 'j' ,
      'k' , 'l' , 'm' , 'n' , 'o' , 'p' , 'q' , 'r' , 's' , 't' , 'u' ,
      'v' , 'w' , 'x' , 'y' , 'z' ],
      addressUrl: ApiService.serverUrl + '/restful/address',
      allRegions: ApiService.serverUrl + '/restful/address/region',
      allCities: ApiService.serverUrl + '/restful/address/city/',
      allStreets: ApiService.serverUrl + '/restful/address/street/',
      streetById: ApiService.serverUrl + '/restful/address/street/id/',
      allDistricts: ApiService.serverUrl + '/restful/address/district/',
      districtById: ApiService.serverUrl + '/restful/address/district/id/'
    };
  }
}
