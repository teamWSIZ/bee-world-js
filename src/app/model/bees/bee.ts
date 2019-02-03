import {Place} from "../places/place";
import {Moveable} from "./moveable";

/**
 * Pszczoła nie przemieszczająca się wogóle
 */

export class Bee implements Moveable {
  private capacity: number;
  private food: number;
  private isMoveable: boolean = true;

  constructor(capacity: number, food: number) {
    this.capacity = capacity;
    this.food = food;
  }

  communicate(other: Bee): void {
  }

  preferredMove(place: Place): Place {
    return place;
  }

  isCanMove(): boolean {
    return this.isMoveable;
  }

  setCanMove(canMove: boolean): void {
    this.isMoveable = canMove;
  }

}
