import { Component, OnInit } from '@angular/core';
import {WorldService} from "../world.service";
import {Place} from "../model/places/place";
import {Meadow} from "../model/places/meadow";
import {WanderingBee} from "../model/bees/wandering-bee";

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
    let bee = new WanderingBee(30, 70);
    this.theplace.addBee(bee);
  }

  runSimulation() {
    this.world.initSimulation(WorldService.exampleWorld());
    this.world.runSimulation(2);
  }

}
