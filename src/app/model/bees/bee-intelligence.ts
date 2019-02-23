import {Place} from "../places/place";
import {Bee} from "./bee";
import {VisiblePlace} from "../places/visible-place";

export interface BeeIntelligence {
  //id of the place the bee wishes to travel from current `place`
  preferredMove(place: VisiblePlace): string;

  //might store some info in `other` bee
  communicate(other: Bee) : void;

}
