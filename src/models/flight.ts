import { City } from "./city";
export interface Flight {
  id: number;
  leavingFrom: City;
  goingTo: City;
  flightDate: string;
  departureTime: string;
  arrivalTime: string;
  fare: number;
}
