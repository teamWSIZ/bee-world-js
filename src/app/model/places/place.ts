import {Bee} from "../bees/bee";

export interface Place {

  getBees(): Bee[];
  getNearbyPlaces() : Place[];
  getName();

  addBee(b : Bee);
  removeBee(b: Bee);

  addNearbyPlace(place : Place);   //setup

  moveBees();



}
