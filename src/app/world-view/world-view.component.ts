import { Component, OnInit } from '@angular/core';
import {WorldService} from "../world.service";
import {Place} from "../model/places/place";
import {Meadow} from "../model/places/meadow";
import {WanderingBee} from "../model/bees/wandering-bee";
import {WorldUtils} from "../model/utils/world-utils";

@Component({
  selector: 'app-world-view',
  templateUrl: './world-view.component.html',
  styleUrls: ['./world-view.component.css']
})
export class WorldViewComponent implements OnInit {
  theplace : Place;

  constructor(public world : WorldService) { }

  ngOnInit() {
    this.theplace = new Meadow("Hałcnów");
    for(let i=0; i<3; i++) {
      let bee = new WanderingBee(30, 70);
      this.theplace.addBee(bee);
    }
  }

  runSimulation() {
    this.world.initSimulation(WorldUtils.exampleWorld());
    this.world.runManyTurns(2);
  }

  runTurn() {
    this.world.runTurn();
  }

  initializeGame() {
    this.world.initSimulation(WorldUtils.exampleWorld());
  }
}
