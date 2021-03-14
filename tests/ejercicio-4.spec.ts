import 'mocha';
import {expect} from 'chai';
import {moveZeros} from '../src/ejercicio-4';

describe('ej2 function tests', () => {
  it('moveZeros([1,5,6,0,0,4,23,0,2]) returns value [3.4,uzac]', () => {
    expect(moveZeros([1,5,6,0,0,4,23,0,2]).to.be.equal([1, 5, 6, 4, 23, 2, 0, 0, 0]));
  });
});