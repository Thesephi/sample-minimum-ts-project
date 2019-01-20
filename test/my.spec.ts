// as you can see, test files can also be written in TypeScript
// because mocha can `require ts-node/register` to take care of run-time parsing
// but of course that doesn't mean you have to write test in TypeScript yo ;)

// we can target our source file (index.ts)
import { getTheTruth } from '../src/index';

// or target our build file (dist/index.js)
import { getTheTruth as getTheOtherTruth } from '../dist/index.js';

describe('Just a stupid test', () => {

  it('should pass this', async () => {
    const theTruth = await getTheTruth();
    if (!theTruth) {
      throw new Error('You are far from the truth');
    }
  });

  it('should pass this as well', async () => {
    const theOtherTruth = await getTheOtherTruth();
    if (!theOtherTruth) {
      throw new Error('You are far from the other truth');
    }
  });

});
