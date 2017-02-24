import {User}  from '../../../models/User';

export class Settings {
    settingsId: number;
    user:User;
    assigned:boolean;
    creator:boolean;
    comment:boolean;
    answer:boolean;
    
}