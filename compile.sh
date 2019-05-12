#!/bin/bash

GOOS=js GOARCH=wasm go build -o web/public/bin/protolock.wasm go/main.go