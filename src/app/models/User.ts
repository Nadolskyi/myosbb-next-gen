let assign = require('core-js/library/fn/object/assign');
import { Apartment } from './apartment.interface';
import { House } from './house';
export class User {
    public userId: number;
    public firstName: string;
    public lastName: string;
    public birthDate: string;
    public email: string;
    public phoneNumber: string;
    public osbbId: number;
    public gender: string;
    public role: string;
    public activated: boolean;
    public apartment: Apartment;
    public house: House;
}
