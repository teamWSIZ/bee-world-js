import { Component, OnInit } from '@angular/core';
import {WorldService} from "../world.service";

@Component({
  selector: 'app-world-view',
  templateUrl: './world-view.component.html',
  styleUrls: ['./world-view.component.css']
})
export class WorldViewComponent implements OnInit {

  constructor(public world : WorldService) { }

  ngOnInit() {

  }

  runSimulation() {
    this.world.initSimulation(WorldService.exampleWorld());
    this.world.runSimulation(2);
  }

}
