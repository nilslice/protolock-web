import { writable } from 'svelte/store';

export const input = writable('')
export const lock = writable('')
export const errors = writable({})
export const runCount = writable(0)

const defaultProto = `// Copyright 2015 The gRPC Authors
// http://www.apache.org/licenses/LICENSE-2.0
//
// The canonical version of this proto can be found at
// https://github.com/grpc/grpc-proto/blob/master/grpc/health/v1/health.proto

syntax = "proto3";

package grpc.health.v1;

message HealthCheckRequest {
  string service = 1;
}

message HealthCheckResponse {
  enum ServingStatus {
    UNKNOWN = 0;
    SERVING = 1;
    NOT_SERVING = 2;
    SERVICE_UNKNOWN = 3; 
  }
  ServingStatus status = 1;
}

service Health {
  rpc Check(HealthCheckRequest) returns (HealthCheckResponse);
  rpc Watch(HealthCheckRequest) returns (stream HealthCheckResponse);
}
`
input.set(defaultProto)
