import { Apartment } from "./apartment.interface";
import { House } from "./house";
export class User {
    userId:number;
    firstName:string;
    lastName:string;
    birthDate:string;
    email:string;
    phoneNumber:string;
    osbbId:number;
    gender:string;
    role:string;
    activated:boolean;
    apartment:any;
    house:House;
}
