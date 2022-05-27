import { Moment } from "moment";

export enum Gender {
  MALE = "MALE",
  FEMALE = "FEMALE",
}
export interface Ticket {
  id?: number;
  firstName: string;
  lastName: string;
  phone: string;
  countryId: number;
  gender: Gender;
  date_of_birth: Moment | string;
  email: string;
  name_on_card: string;
  creditNumber: string;
}
