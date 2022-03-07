import 'mocha';
import {expect} from 'chai';
import {adnToARN} from '../src/ejercicio-PE102-1';
import {arnToADN} from '../src/ejercicio-PE102-1';

describe('ej-PE102-1 function tests', () => {
  it('adnToARN returns value ["A","G","U","A"]', () => {
    expect(adnToARN(["T","C","A","T"])).to.be.equal(["A","G","U","A"]);
  });
});