import {BeeIntelligence} from "./bee-intelligence";

/**
 * W turn-owej grze obiekty które już się ruszyły będą miały "isCanMove == true"
 */

export interface MoveableInTurns {

  isCanMove() : boolean;

  setCanMove(canMove: boolean) : void;

}
