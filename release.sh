#!/bin/bash

# compile the Go source to wasm
./compile.sh

# build the app for production 
npm run build --prefix web

# move the output into repo root for hosting (`docs` for Github Pages)
mkdir -p docs
cp -R web/public/* docs
