import { Injectable } from '@angular/core';
import {Place} from "./model/places/place";
import {Meadow} from "./model/places/meadow";
import {WanderingBee} from "./model/bees/wandering-bee";

@Injectable({
  providedIn: 'root'
})
export class WorldService {
  places : Place[];

  constructor() { }

  static exampleWorld(): Place[] {
    let m1 = new Meadow("m1");
    let m2 = new Meadow("m2");
    m1.addNearbyPlace(m2);
    m2.addNearbyPlace(m1);
    let b1 = new WanderingBee(80, 10);
    m1.addBee(b1);
    return [m1, m2];
  }

  //inicjalizuje warunki symulacji (miejsca i pszczoły)
  initSimulation(places : Place[]) {
    this.places = places;
  }

  runSimulation(maxTurn : number) {
    for (let i = 0; i < maxTurn; i++) {
      console.log('Starting turn ' + i);
      this.runTurnSequence();
    }
  }

  runTurnSequence() {
    this.unfreezeBeeMovement();
    this.beesMove();
    this.printWorld()
  }

  private unfreezeBeeMovement() {
    this.places.forEach(p => {
      p.getBees().forEach(b => b.setCanMove(true));
    });
  }

  private beesMove() {
    this.places.forEach(p => p.moveBees());
  }

  private printWorld() {
    this.places.forEach(p => {
      console.log('Place (' + p.getName() + ')');
      p.getBees().forEach(b => console.log(JSON.stringify(b)));
    });
  }

}
