export class Bee {
  strength: number;
  capacity: number;
  food: number;

  constructor(capacity: number, food: number) {
    this.capacity = capacity;
    this.strength = 100 - capacity;
    this.food = food;
  }

}
