import {async} from '@angular/core/testing';
import {Bee} from "./bee";
import {Meadow} from "./meadow";

describe('AppComponent', () => {
  let testee: Meadow;
  beforeEach(async(() => {
    testee = new Meadow();
  }));

  it('should create meadow', () => {
    expect(testee).toBeDefined();

  });

});
