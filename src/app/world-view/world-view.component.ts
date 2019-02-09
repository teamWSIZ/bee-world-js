import {Component, OnInit} from '@angular/core';
import {WorldService} from "../world.service";
import {WorldUtils} from "../model/utils/world-utils";

@Component({
  selector: 'app-world-view',
  templateUrl: './world-view.component.html',
  styleUrls: ['./world-view.component.css']
})
export class WorldViewComponent implements OnInit {

  constructor(public world : WorldService) { }

  ngOnInit() {
  }

  run5Turns() {
    for (let i = 0; i < 5; i++) {
      this.runTurn();
    }
  }

  runTurn() {
    this.world.runTurn();
  }

  initializeGame() {
    this.world.initSimulation(WorldUtils.exampleWorld());
  }
}
