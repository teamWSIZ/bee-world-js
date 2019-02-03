import {Bee} from "../bees/bee";
import {Place} from "./place";

export class Meadow implements Place {

  bees: Bee[] = [];
  nearby: Place[] = [];
  name: string;


  constructor(name: string) {
    this.name = name;
  }

  getName() {
    return this.name;
  }

  addBee(b: Bee) {
    this.bees.push(b);
  }

  addNearbyPlace(place: Place) {
    this.nearby.push(place);
  }

  getBees(): Bee[] {
    return this.bees;
  }

  getNearbyPlaces(): Place[] {
    return this.nearby;
  }

  removeBee(b: Bee) {
    const idx = this.bees.indexOf(b);
    if (idx != undefined) {
      this.bees.splice(idx,1);
    }
  }

  moveBees() {
    let toremove = [];
    const current = this;
    this.bees.forEach(bee => {
      if (!bee.isCanMove()) return;
      let next = bee.preferredMove(current);
      if (next === current) return;
      toremove.push(bee);
      next.addBee(bee);
    });
    toremove.forEach(b => this.removeBee(b));
  }



}
