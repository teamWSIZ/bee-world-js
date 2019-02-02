import {Place} from "../places/place";
import {Bee} from "./bee";

/**
 * Pszczoła nie przemieszczająca się wogóle
 */

export class WanderingBee extends Bee {

  private selectRandom(places : Place[]) {
    let n = places.length;
    let idx = Math.floor(n * Math.random());
    return places[idx];
  }

  move(place: Place): Place {
    let places = place.get_nearby_place();
    return this.selectRandom(places);
  }

}
