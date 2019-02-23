import {Bee} from "../bees/bee";
import {Place} from "./place";

/**
 * Tzw. wrapper na klasie Place,
 * Idea: trzeba zawęzić to co pszczoły mogą widzieć/używać tak, by nie mogły np. dostać
 * pełnych instancji typu Place z miejsc sąsiednich (z których znowu mogłyby przeszukać ich sąsiadów itp,
 * bez latania tamże -- i odczytać całą mapę świata bez ruszania się z miejsca).
 */
export class VisiblePlace {
  private place : Place;

  constructor(place: Place) {
    this.place = place;
  }

  getId() : string {
    return this.place.getId();
  }
  getNearbyPlaceIds(): string[] {
    let places = [];
    this.place.getNearbyPlaces().forEach(p => places.push(p.getId()));
    return places;
  }
  getAvilableFood() : number {
    return this.place.getAvilableFood();
  }
}
