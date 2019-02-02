import { Injectable } from '@angular/core';
import {Place} from "./model/places/place";

@Injectable({
  providedIn: 'root'
})
export class WorldService {
  places : Place[];

  constructor() { }

  //inicjalizuje warunki symulacji (miejsca i pszczoły)
  initSimulation(places : Place[]) : void {
    this.places = places;
  }

  runSimulation(maxTurn : number): void {
    for (let i = 0; i < maxTurn; i++) {
      this.runTurnSequence();
    }
  }



 runTurnSequence(): void {
  this.unfreezeBeeMovement();
  // beesFeed();
  // beesCommunicate();
  // beesBreed();
  this.beesMove();
}

  unfreezeBeeMovement(): void {
    for (let place of this.places) {
      for (let bee of place.get_bees()) {
        bee.setCanMove(true);
      }
    }
  }

  beesMove(): void {
     this.places.forEach(place=>place.bees_breed());
  }

}
