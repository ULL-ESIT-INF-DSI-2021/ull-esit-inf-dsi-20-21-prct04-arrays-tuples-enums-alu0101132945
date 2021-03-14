import 'mocha';
import {expect} from 'chai';
import {pointNSum} from '../src/ejercicio-7';
import {pointNProd} from '../src/ejercicio-7';
import {pointNEuc} from '../src/ejercicio-7';

describe('ej7 function tests', () => {
  it('pointNSum(pointN1,pointN2) returns value [102, 70, 25, 40]', () => {
    expect(pointNSum(pointN1,pointN2).to.be.equal([102, 70, 25, 40]));
  });
  it('pointNProd(pointN1,4) returns value [8, 80, 20, 40]', () => {
    expect(pointNProd(pointN1,4).to.be.equal([8, 80, 20, 40]));
  });
  it('pointNEuc(pointN1,pointN2) returns value 12.609520212918492', () => {
    expect(pointNEuc(pointN1,pointN2).to.be.equal(12.609520212918492));
  });
});