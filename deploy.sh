#!/bin/bash

set -e;

DEPLOY_DIRECTORY=/var/www/cloud.ddboline.net/html/;

rm -rf ${DEPLOY_DIRECTORY}/*

cp -a IMAGES swaggerui wasm_index wasm_weather robots.txt W_boson_front.ico *.html ${DEPLOY_DIRECTORY};
