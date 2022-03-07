import 'mocha';
import {expect} from 'chai';
import {adnToARN} from '../src/ejercicio-PE102-1';
//import {arnToADN} from '../src/ejercicio-PE102-1';

describe('ej-PE102-1 function tests', () => {
  it('adnToARN returns value ["AUG","GAA","UUU","AGG"]', () => {
    expect(adnToARN(['TAC','CTT','AAA','TCG'])).to.be.equal(['AUG','GAA','UUU','AGC']);
  });
});