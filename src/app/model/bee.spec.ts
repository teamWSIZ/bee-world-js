import { TestBed, async } from '@angular/core/testing';
import {Bee} from "./bee";

describe('AppComponent', () => {
  let testee: Bee;
  beforeEach(async(() => {
    testee = new Bee(50, 10);
  }));

  it('should create a bee', () => {
    // expect(testee).toBeTruthy();
    expect(testee).toBeDefined();
  });

});
