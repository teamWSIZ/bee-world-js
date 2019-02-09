import {Component, Input, OnInit} from '@angular/core';
import {Place} from "../model/places/place";

@Component({
  selector: 'app-place-view',
  templateUrl: './place-view.component.html',
  styleUrls: ['./place-view.component.css']
})
export class PlaceViewComponent implements OnInit {
  @Input()
  place: Place;

  constructor() { }

  ngOnInit() {
  }

}
