import {Place} from "../places/place";
import {Bee} from "./bee";

export interface BeeIntelligence {
  //where to preferredMove, given where we are
  preferredMove(place : Place ) : Place;

  //might store some info in `other` bee
  communicate(other: Bee) : void;

}
