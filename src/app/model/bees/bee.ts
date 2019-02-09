import {Place} from "../places/place";
import {Moveable} from "./moveable";
import { v4 as uuid } from 'uuid';


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
    this.id = uuid().substr(0,8);
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


  set food(value: number) {
    this._food = value;
  }
}
