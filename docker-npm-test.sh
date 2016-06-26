#!/usr/bin/env bash
docker run --rm -it -w $PWD -v $PWD:$PWD node bash -c "npm install; node follows.js"
#docker run --rm -it -w $PWD -v $PWD:$PWD node bash -c "npm install; $@"
