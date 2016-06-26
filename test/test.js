var chai = require('chai');
var expect = chai.expect;
var nock = require('nock');
var RxTwitch = require('../index');

describe('rx-twitch', function() {
  it('should be defined', function() {
    expect(RxTwitch).to.be.a('function');
  });

  it('should be .Repos defined', function() {
    expect(RxTwitch.Fetch).to.be.a('function');
  });
});
