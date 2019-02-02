import {async} from '@angular/core/testing';
import {Bee} from "./bees/bee";
import {Meadow} from "./places/meadow";

describe('AppComponent', () => {
  let testee: Meadow;
  beforeEach(async(() => {
    testee = new Meadow();
  }));

  it('should create meadow', () => {
    expect(testee).toBeDefined();
  });

  it('should add bee to meadow', () => {
    let b = new Bee(50, 2);
    testee.add_bee(b);
    expect(testee.get_bees).toContain(b);
  });

});
