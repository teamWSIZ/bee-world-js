import { Injectable } from '@angular/core';
import {Place} from "./model/places/place";
import {Meadow} from "./model/places/meadow";
import {WanderingBee} from "./model/bees/wandering-bee";

@Injectable({
  providedIn: 'root'
})
export class WorldService {
  public places : Place[];

  constructor() { }

  //inicjalizuje warunki symulacji (miejsca i pszczoły)
  initSimulation(places : Place[]) {
    this.places = places;
  }

  public runManyTurns(maxTurn : number) {
    for (let i = 0; i < maxTurn; i++) {
      this.runTurn();
    }
  }

  public runTurn() {
    this.unfreezeBeeMovement();
    this.beesMove();
    this.printWorld()
  }

  //helpers

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
