import {Place} from "../places/place";
import {Bee} from "./bee";

export interface BeeIntelligence {
  //where to move, given where we are
  move(place : Place ) : Place;

  //might store some info in `other` bee
  communicate(other: Bee) : void;

}
