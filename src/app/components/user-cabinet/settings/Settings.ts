import { User }  from '../../../models/User';

export class Settings {
    public settingsId: number;
    public user: User;
    public assigned: boolean;
    public creator: boolean;
    public comment: boolean;
    public answer: boolean;
}
