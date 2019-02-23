import {Place} from "../places/place";
import {Bee} from "./bee";
import {VisiblePlace} from "../places/visible-place";

/**
 * Pszczoła nie przemieszczająca się wogóle
 */

export class WanderingBee extends Bee {

  private static selectRandom(places: string[]): string {
    let pl = Array.from(places);
    let n = pl.length;
    let idx = Math.floor(n * Math.random());
    return pl[idx];
  }

  preferredMove(place: VisiblePlace): string {
    let places = place.getNearbyPlaceIds();
    let next = WanderingBee.selectRandom(places);
    let idx = places.indexOf(next);
    if (idx>=0) {
      return places[idx];
    } else {
      return place.getId();
    }
  }

}
