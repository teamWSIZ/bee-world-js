import {Bee} from "../bees/bee";

export interface Place {
  getId(): string;    //unikalne ID miejsca
  getBees(): Set<Bee>;   //wszystkie pszczoły w danym miejscu
  getNearbyPlaces() : Set<Place>;  //wszystkie miejsca w okolicy (pełne!)
  getName();  //nazwa miejsca (nie koniecznie unikalna)
  getAvilableFood() : number; //ilość pyłku aktualnie obecna w danym miejscu

  //manipulacja rojem
  addBee(b : Bee);
  removeBee(b: Bee);

  addNearbyPlace(place : Place);   //setup

  //metody używane w czasie "przeliczania turn-u"
  moveBees(); //wykonaj ruch dla każdej pszczoły w tym miejscu
  beeCollectsFood(maxAmount : number) : number; //pojedyncza pszczoła chce zebrać `maxAmount` pyłku -> ile się udało

}
