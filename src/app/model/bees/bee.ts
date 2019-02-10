import {Place} from "../places/place";
import {MoveableInTurns} from "./moveableInTurns";
import { v4 as uuid } from 'uuid';
import {BeeIntelligence} from "./bee-intelligence";
import {VisiblePlace} from "../places/visible-place";


/**
 * Podstawowa klasa pszczoły (wszystkie inne muszą dziedziczyć z tej klasy).
 *
 */

export class Bee implements MoveableInTurns, BeeIntelligence {
  private capacity: number;
  private food: number;  //pszczoły dziedziczące nie mogą mieć pełnego dostępu do tej zmiennej -- inaczej mogłyby sobie dodawać żywności...
  private isMoveable: boolean = true;
  id: string;

  constructor(capacity: number, food: number) {
    this.capacity = capacity;
    this.food = food;
    this.id = uuid().substr(0,8);
  }

  communicate(other: Bee): void {
    //nie robi nic -- klasy dziedziczące powinny coś tu robić
  }

  preferredMove(place: VisiblePlace): string {
    //nie wybiera żadnego miejsca -- klasy dziedziczące powinny coś tu robić
    return place.getId();
  }

  isCanMove(): boolean {
    return this.isMoveable;
  }

  // Klasy dziedziczące nie powinny używać tej metody
  setCanMove(canMove: boolean): void {
    this.isMoveable = canMove;
  }

  public getFood() : number {
    return this.food;
  }

  ///////////////////////////////////////
  //Modyfikatory żywności pszczoły.
  // Klasy dziedziczące nie powinny używać tych funkcji
  // (Jest to, niestety, tylko konwencja tutaj.)
  consumeFood(amount : number) {
    if (amount>0) {
      this.food -= amount;
    }
  }

  collectFood(amount : number) {
    if (amount>0) {
      this.food += amount;
    }
  }

}
