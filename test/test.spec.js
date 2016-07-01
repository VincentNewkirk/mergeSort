var chai = require('chai');
var should = chai.should();
var expect = chai.expect;
var mergeSort = require('./../js/script.js');

describe('mergeSort', function () {
  it('Should exist', function () {
    expect(mergeSort).to.exist;
  });
  it('Should be a function', function () {
    expect(mergeSort).to.be.a('function');
  });

  describe('The result:', function(){
    var testArr = [5,4,6,3,7,1,2,8];
    it('Should equal', function () {
      expect(mergeSort(testArr)).to.deep.equal([1,2,3,4,5,6,7,8]);
    });
    it('Should be able to handle this longer array', function () {
      var testArr2 = [11,9,8,7,6,5,4,3,2,1,0];
      expect(mergeSort(testArr2)).to.deep.equal([0,1,2,3,4,5,6,7,8,9,11]);
    });
  });
});