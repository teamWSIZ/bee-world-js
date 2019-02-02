import {Bee} from "../bees/bee";

export interface Place {

  get_bees(): Bee[];
  add_bee(b : Bee);
  remove_bee(b: Bee);

  get_nearby_place() : Place[];
  add_nearby(place : Place);   //setup

  bees_feed();
  bees_fight();
  bees_breed();
  bees_move();

}
