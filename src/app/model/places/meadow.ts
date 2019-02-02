import {Bee} from "../bees/bee";
import {Place} from "./place";

export class Meadow implements Place {
  bees: Bee[];

  add_bee(b: Bee) {
    this.bees.push(b);
  }

  add_nearby(place: Place) {
  }

  bees_feed() {
  }

  bees_fight() {
  }

  get_bees(): Bee[] {
    return [];
  }

  get_nearby_place(): Place[] {
    return [];
  }

  remove_bee(b: Bee) {
    const idx = this.bees.indexOf(b);
    if (idx != undefined) {
      this.bees.splice(idx,1);
    }
  }

  bees_breed() {
  }

  bees_move() {
  }




}
