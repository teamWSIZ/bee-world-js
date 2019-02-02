import {BeeIntelligence} from "./bee_intelligence";


export interface Moveable extends BeeIntelligence {

  isCanMove() : boolean;

  setCanMove(canMove: boolean) : void;


}
