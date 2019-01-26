import {Bee} from "./bee";

export interface BeePlace {

  get_bees(): Bee[];
  add_bee(b : Bee);
  remove_bee(b: Bee);

  nearby_places() : BeePlace[];
  add_nearby(place : BeePlace);

  bees_feed();
  bees_fight();
  bees_breed();

}
