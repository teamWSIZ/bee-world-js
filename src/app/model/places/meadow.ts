import {Bee} from "../bees/bee";
import {Place} from "./place";
import {v4 as uuid} from "uuid";
import {VisiblePlace} from "./visible-place";

export class Meadow implements Place {
  private id : string;
  bees = new Set<Bee>();  //Set zamiast [] aby można było szybko szukać/usuwać
  nearby = new Set<Place>();
  id2place = new Map<string, Place>();

  name: string;
  food: number;


  constructor(name: string, availableFood : number) {
    this.name = name;
    this.food = availableFood;
    this.id = uuid();
  }

  getName() {
    return this.name;
  }

  getId(): string {
    return this.id;
  }

  addBee(b: Bee) {
    this.bees.add(b);
  }

  addNearbyPlace(place: Place) {
    this.nearby.add(place);
    this.id2place.set(place.getId(), place);
  }

  getBees(): Set<Bee> {
    return this.bees;
  }

  getNearbyPlaces(): Set<Place> {
    return this.nearby;
  }

  removeBee(b: Bee) {
    this.bees.delete(b);
  }

  getAvilableFood(): number {
    return this.food;
  }

  beeCollectsFood(amount: number): number {
    let x = Math.min(this.food, amount);
    this.food -= x;
    return x;
  }

  moveBees() {
    let toremove = [];
    const current = this;
    this.bees.forEach(bee => {
      if (!bee.isCanMove()) return;
      let nextId = bee.preferredMove(new VisiblePlace(current)); //restrict visibility (VisiblePlace); let bee decide
      if (nextId === current.getId()) return;
      let next = this.id2place.get(nextId);   //todo: this code should be tested!!!
      toremove.push(bee);
      next.addBee(bee);
    });
    toremove.forEach(b => this.removeBee(b));
  }





}
