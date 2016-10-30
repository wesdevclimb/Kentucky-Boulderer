var expect = require('chai').expect;
var areas = require('../src/seed.js');

// Seed data testing
describe("Seed Data", function() {
  // test the existence of seed data in test scripts
  it('should create an array of areas with a length equal to 2', function(){
    expect(areas.length).to.equal(2);
  });
});
