// +build js

package main

import (
	"encoding/json"
	"fmt"
	"strings"
	"syscall/js"

	"github.com/nilslice/protolock"
)

const fileName = "demo.proto"

func main() {
	done := make(chan struct{})
	js.Global().Set("protolock", make(map[string]interface{}))
	module := js.Global().Get("protolock")
	module.Set("initialize",
		js.FuncOf(func(this js.Value, args []js.Value) interface{} {
			if args == nil {
				fmt.Println("initialize: not enough args")
				return nil
			}

			return toJson(initialize(args[0].String()))
		}),
	)
	module.Set("status", 
		js.FuncOf(func(this js.Value, args []js.Value) interface{} {
			if args == nil || len(args) < 2 {
				fmt.Println("status: not enough args")
				return nil
			}

			return toJson(status(args[0].String(), args[1].String()))
	}))
	<-done
}

// initialize creates the proto.lock data from a .proto definition (args[0])
func initialize(input string) *protolock.Protolock {
	entry, err := protolock.Parse(fileName, strings.NewReader(input))
	if err != nil {
		fmt.Println("initialize error:", err)
		return nil
	}

	return &protolock.Protolock{
		Definitions: append([]protolock.Definition{},
			protolock.Definition{
				Filepath: fileName,
				Def:      entry,
			},
		),
	}
}

// status compares the current (args[0]) and updated (args[1]) protolocks and
// returns the report created
func status(currentLock, updatedInput string) []protolock.Warning {
	current, err := protolock.FromReader(strings.NewReader(currentLock))
	if err != nil {
		fmt.Println("status error:", err)
		return nil
	}

	updated := initialize(updatedInput)
	if updated == nil {
		fmt.Println("status error: initialize call returned nil value")
		return nil
	}

	report, err := protolock.Compare(current, *updated)
	if err != nil && err != protolock.ErrWarningsFound {
		fmt.Println("compare error:", err)
		return nil
	}

	return report.Warnings
}

func toJson(v interface{}) string {
	b, err := json.Marshal(v)
	if err != nil {
		fmt.Println("serialize error:", err)
	}

	return string(b)
}
