import {Place} from "../places/place";
import {Moveable} from "./moveable";

/**
 * Pszczoła nie przemieszczająca się wogóle
 */

export class Bee implements Moveable {
  strength: number;
  capacity: number;
  food: number;
  isMoveable: boolean = true;

  constructor(capacity: number, food: number) {
    this.capacity = capacity;
    this.strength = 100 - capacity;
    this.food = food;
  }

  communicate(other: Bee): void {
  }

  move(place: Place): Place {
    return place;
  }

  isCanMove(): boolean {
    return this.isMoveable;
  }

  setCanMove(canMove: boolean): void {
    this.isMoveable = canMove;
  }

}
