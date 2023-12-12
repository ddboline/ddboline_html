#!/bin/bash

set -e;

git add wasm_index/snippets/* wasm_index/snippets/*/* wasm_index/weather_api_wasm*
git add wasm_weather/snippets/* wasm_weather/snippets/*/* wasm_weather/weather_app_wasm*
git commit -m "update wasm build" -a
