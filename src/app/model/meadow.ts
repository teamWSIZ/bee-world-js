import {Bee} from "./bee";
import {BeePlace} from "./bee_place";

export class Meadow implements BeePlace {

  add_bee(b: Bee) {
  }

  add_nearby(place: BeePlace) {
  }

  bees_feed() {
  }

  bees_fight() {
  }

  get_bees(): Bee[] {
    return [];
  }

  nearby_places(): BeePlace[] {
    return [];
  }

  remove_bee(b: Bee) {
  }

  bees_breed() {
  }



}
