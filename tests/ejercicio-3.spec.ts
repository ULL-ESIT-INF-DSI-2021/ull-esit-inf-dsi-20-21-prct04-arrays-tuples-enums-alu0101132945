import 'mocha';
import {expect} from 'chai';
import {meanAndConcatenate} from '../src/ejercicio-2';

describe('ej2 function tests', () => {
  it('meanAndConcatenate([1,2,3,6,'u','z','a',5,'c']) returns value ', () => {
    expect(meanAndConcatenate([1,2,3,6,'u','z','a',5,'c'])).to.be.equal([3.4,'uzac']);
  });
});