import { Injectable } from '@angular/core';
import {Place} from "./model/places/place";
import {Meadow} from "./model/places/meadow";
import {WanderingBee} from "./model/bees/wandering-bee";
import {Bee} from "./model/bees/bee";

@Injectable({
  providedIn: 'root'
})
export class WorldService {
  public places : Place[];
  private BEE_EATS_PER_TURN = 3;
  private BEE_COLLECTS_PER_TURN = 30;


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
    this.beesGather();
    this.beesEat();
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

  //eat, die, gather food
  private beesEat() {
    this.places.forEach(p => {
      let starved = new Set<Bee>();
      p.getBees().forEach(b => {
        b.food -= this.BEE_EATS_PER_TURN;
        if (b.food<0) starved.add(b);
      });
      //remove all starved bees
      starved.forEach(b => p.removeBee(b));
    })
  }

  private beesGather() {
    this.places.forEach(p => {
      p.getBees().forEach(b => {
        let collected = p.beeCollectsFood(this.BEE_COLLECTS_PER_TURN);
        b.food += collected;
      });
    })
  }

}
