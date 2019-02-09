import {Meadow} from "../places/meadow";
import {WanderingBee} from "../bees/wandering-bee";
import {Place} from "../places/place";

export class WorldUtils {

  public static exampleWorld(): Place[] {
    let m1 = new Meadow("Hałcnów");
    let m2 = new Meadow("Komorowice");
    m1.addNearbyPlace(m2);
    m2.addNearbyPlace(m1);
    let b1 = new WanderingBee(80, 10);
    m1.addBee(b1);
    return [m1, m2];
  }

}
