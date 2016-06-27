# rx-twitch

[![npm version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
<!--[![coverage status][coveralls-image]][coveralls-url]-->

[npm-image]: https://img.shields.io/npm/v/rx-twitch.js.svg?style=flat-square
[npm-url]: https://www.npmjs.com/package/rx-twitch.js
[travis-image]: https://img.shields.io/travis/yongjhih/rx-twitch.js.svg?style=flat-square
[travis-url]: https://travis-ci.org/yongjhih/rx-twitch.js
[coveralls-image]: https://img.shields.io/coveralls/yongjhih/rx-twitch.js.svg?style=flat-square
[coveralls-url]: https://coveralls.io/r/yongjhih/rx-twitch.js

<!--![](art/rx-twitch.png)-->

## Usage

```js
var RxTwitch = require('rx-twitch');
RxTwitch.Fetch('https://api.twitch.tv/kraken/channels/yongjhih/follows').subscribe(function (json) {
  console.log(json);
});
```

```js
var RxTwitch = require('rx-twitch');
twitch.follows('yongjhih').subscribe(function (follow) {
  console.log(follow.user.name);
});
```

## Installation

```sh
npm install rx-twitch
```

## Test

```sh
npm test
```

or

```sh
./docker-npm-test.sh
```

## License

```
MIT License

Copyright (c) 2016 Andrew Chen

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```
