var chai = require('chai');
var expect = chai.expect;
var nock = require('nock');
var RxTwitch = require('../index');

describe('rx-twitch', function() {
  it('should be defined', function() {
    expect(RxTwitch).to.be.a('function');
  });

  it('should be .Fetch defined', function () {
    expect(RxTwitch.Fetch).to.be.a('function');
  });

  it('.Follows() should be least 1 follower', function () {
    nock('//api.twitch.tv')
      .get('/kraken/channels/yongjhih/follows')
      .replyWithFile(200, __dirname + '/yongjhih-follows.json');

    RxTwitch.Follows('yongjhih').subscribe(function (it) {
      console.log(it.user.name);
      expect(it.user.name).to.be.eql('e4e2e7343');
    }, function (e) {
      console.log(e);
    });
  });

  it('.Fetch() should be least 1 follower', function () {
    nock('//api.twitch.tv')
      .get('/kraken/channels/yongjhih/follows')
      .replyWithFile(200, __dirname + '/yongjhih-follows.json');

    RxTwitch.Fetch('//api.twitch.tv/kraken/channels/yongjhih/follows').subscribe(function (it) {
      console.log(it.user.name);
      expect(it.user.name).to.be.eql('e4e2e7343');
    }, function (e) {
      console.log(e);
    });
  });
});

/* vim: set sw=2: */
