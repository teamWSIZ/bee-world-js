import {Meadow} from "../places/meadow";
import {WanderingBee} from "../bees/wandering-bee";
import {Place} from "../places/place";
import {Bee} from "../bees/bee";

export class WorldUtils {

  public static exampleWorld(): Place[] {
    let m1 = new Meadow("Hałcnów", 10);
    let m2 = new Meadow("Komorowice", 10);
    WorldUtils.link(m1,m2);
    let b1 = new WanderingBee(80, 10);
    m1.addBee(b1);
    return [m1, m2];
  }

  public static northernBiala(): Place[] {
    let mH = new Meadow("Hałcnów", 0);
    let mK = new Meadow("Komorowice", 80);
    let mO = new Meadow("Obszary", 0);
    let mKM = new Meadow("KozyMałe", 10 );
    WorldUtils.link(mH, mK);
    WorldUtils.link(mO, mK);
    WorldUtils.link(mH, mO);
    WorldUtils.link(mK, mKM);
    let bee = new WanderingBee(80, 20);
    mK.addBee(bee);
    return [mH, mK, mO, mKM];
  }

  private static link(p1 : Place, p2: Place) {
    p1.addNearbyPlace(p2);
    p2.addNearbyPlace(p1);
  }



}
