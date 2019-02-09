import {Place} from "../places/place";
import {Moveable} from "./moveable";

/**
 * Pszczoła nie przemieszczająca się wogóle
 */

export class Bee implements Moveable {
  private capacity: number;
  private _food: number;
  private isMoveable: boolean = true;
  id: string;

  constructor(capacity: number, food: number) {
    this.capacity = capacity;
    this._food = food;
    this.id = 'Bzzz';
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

  get food(): number {
    return this._food;
  }

}
