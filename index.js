module.exports = RxTwitch;

require('es6-promise').polyfill();
var Fetch = require('isomorphic-fetch');

var Rx = require('rx');

function RxTwitch() {
}

RxTwitch.Fetch = fetch;
function fetch(url, options) {
  return Rx.Observable.fromPromise(Fetch(url)).flatMap(function (response) {
    return Rx.Observable.concat(Rx.Observable.fromPromise(response.json()), (response.json()._links && response.json()._links.next && response.json()._cursor)
        ? fetch(response.json()._links.next, options) : Rx.Observable.empty());
  });
}

RxTwitch.Follows = follows;
function follows(user, options) {
  var baseUrl = 'https://api.twitch.tv';

  var url = baseUrl + `/kraken/channels/${user}/follows`;
  return fetch(url, options).flatMap(function (json) { return Rx.Observable.from(json.follows); });
}

/* vim: set sw=2: */
