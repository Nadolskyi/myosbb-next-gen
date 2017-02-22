import { IOsbb } from './osbb';
import { Attachment } from './attachment';
import { Street } from './addressDTO';

export class OsbbRegistration {
  public osbbId: number;
  public name: string;
  public description: string;
  public street: Street;
  public address: string;
  public district: string;
  public logo: Attachment;
  public creationDate: Date;
  public available: boolean;
}
