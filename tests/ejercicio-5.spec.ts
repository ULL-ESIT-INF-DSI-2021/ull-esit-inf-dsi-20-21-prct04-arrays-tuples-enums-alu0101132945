import 'mocha';
import {expect} from 'chai';
import {multiplyAll} from '../src/ejercicio-5';

describe('ej2 function tests', () => {
  it('multiplyAll([3,4])(5) returns value [15, 20]', () => {
    expect(multiplyAll([3,4])(5).to.be.equal([15, 20]));
  });
});