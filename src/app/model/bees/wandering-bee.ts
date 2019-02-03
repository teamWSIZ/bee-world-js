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

  preferredMove(place: Place): Place {
    let places = place.getNearbyPlaces();
    let next = this.selectRandom(places);
    console.log('Selected:' + next.getName());
    this.setCanMove(false);
    return next;
  }

}
