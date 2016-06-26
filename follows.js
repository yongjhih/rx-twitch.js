var RxTwitch = require('./index');
var user = 'yongjhih';
RxTwitch.Follows(user).subscribe(function (it) {
  console.log(it.user.name);
}, function (e) {
  console.log(e);
});

/*
var url = 'https://api.twitch.tv/kraken/channels/yongjhih/follows';
require('es6-promise').polyfill();
require('isomorphic-fetch');

fetch(url).then(function(response) {
    if (response.status >= 400) {
        throw new Error("Bad response from server");
    }
    return response.json();
})
.then(function(stories) {
    console.log(stories);
});
*/

/*
var url = 'https://api.twitch.tv/kraken/channels/yongjhih/follows';
var Rx = require('rx');
var RxFetch = require('rx-fetch');
RxFetch(url).json().subscribe(function (response) {
  console.log(response);
});
*/

/*
var url = 'https://api.twitch.tv/kraken/channels/yongjhih/follows';
require('es6-promise').polyfill();
require('isomorphic-fetch');
var Rx = require('rx');
Rx.Observable.fromPromise(fetch(url)).subscribe(function (response) {
  console.log(response.json());
});
*/

/*
var url = 'https://api.twitch.tv/kraken/channels/yongjhih/follows';
require('es6-promise').polyfill();
require('isomorphic-fetch');
var Rx = require('rx');
Rx.Observable.create(function (sub) {
  fetch(url).then(function (response) {
    sub.onNext(response);
    sub.onCompleted();
  }, function (e) {
    sub.onError();
  })
}).flatMap(function (response) {
  return Rx.Observable.fromPromise(response.json());
}).subscribe(function (response) {
  console.log(response);
});
*/

/*
var url = 'https://api.twitch.tv/kraken/channels/yongjhih/follows';
require('es6-promise').polyfill();
require('isomorphic-fetch');
var Rx = require('rx');
Rx.Observable.fromPromise(fetch(url)).flatMap(function (response) {
  return Rx.Observable.fromPromise(response.json());
}).subscribe(function (response) {
  console.log(response);
});
*/
/* vim: set sw=2: */
