let assign = require("core-js/library/fn/object/assign");
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
    apartment:Apartment;
    house:House;
    /*
    constructor(userId:number,firstName:string,lastName:string,
    birthDate:string,email:string,phoneNumber:string,osbbId:number,
    gender:string,role:string,activated:boolean,apartment:Apartment,
    house:House){
    this.userId=userId;
    this.firstName=firstName;
    this.lastName=lastName;
    this.birthDate=birthDate;
    this.email=email;
    this.phoneNumber=phoneNumber;
    this.osbbId=osbbId;
    this.gender=gender;
    this.role=role;
    this.activated=activated;
    this.apartment=apartment;
    this.house=house;
    }*/
  }

