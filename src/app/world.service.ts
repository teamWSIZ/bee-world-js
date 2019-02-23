import { Injectable } from '@angular/core';
import {Place} from "./model/places/place";
import {Meadow} from "./model/places/meadow";
import {WanderingBee} from "./model/bees/wandering-bee";
import {Bee} from "./model/bees/bee";

@Injectable({
  providedIn: 'root'
})
export class WorldService {
  public places: Set<Place>;
  private BEE_EATS_PER_TURN = 3;
  private BEE_COLLECTS_PER_TURN = 30;

  constructor() { }

  //inicjalizuje warunki symulacji (miejsca i pszczoły)
  initSimulation(places : Place[]) {
    this.places = new Set<Place>(places)
  }

  public runManyTurns(maxTurn : number) {
    for (let i = 0; i < maxTurn; i++) {
      this.runTurn();
    }
  }

  public runTurn() {
    this.beesCollectPollen();
    this.beesEat();
    this.beesMove();
  }

  //helpers

  private unfreezeBeeMovement() {
    this.places.forEach(p => {
      p.getBees().forEach(b => b.setCanMove(true));
    });
  }

  private beesMove() {
    this.unfreezeBeeMovement();
    this.places.forEach(place => place.moveBees());
  }


  private beesEat() {
    this.places.forEach(p => {
      let starved = new Set<Bee>();
      p.getBees().forEach(b => {
        b.consumeFood(this.BEE_EATS_PER_TURN);
        if (b.getFood()<0) starved.add(b);
      });
      //remove all starved bees
      starved.forEach(b => p.removeBee(b));
    })
  }

  private beesCollectPollen() {
    this.places.forEach(place => {
      place.getBees().forEach(bee => {
        let collected = place.beeCollectsFood(this.BEE_COLLECTS_PER_TURN);  //ile udało się nazbierać
        bee.collectFood(collected);
      });
    })
  }

}
