<script>
    import { lock, errors } from './store.js'
    import Input from './Input.svelte'
    import Init from './Init.svelte'
    import Status from './Status.svelte'
    import Report from './Report.svelte'

    function goSetup() {
        if (!WebAssembly.instantiateStreaming) { // polyfill
            WebAssembly.instantiateStreaming = async (resp, importObject) => {
                const source = await (await resp).arrayBuffer();
                return await WebAssembly.instantiate(source, importObject);
            };
        }
    
        const go = new Go();
        let mod, inst;
        WebAssembly.instantiateStreaming(fetch("/bin/protolock.wasm"), go.importObject).then((result) => {
            mod = result.module;
            inst = result.instance;
            run();
        }).catch((err) => {
            console.error(err);
        });
    
        async function run() {
            await go.run(inst);
            inst = await WebAssembly.instantiate(mod, go.importObject); // reset instance
        }
    }

    const year = (new Date()).getFullYear()
</script>

<svelte:head>
    <script src="https://cdn.jsdelivr.net/npm/text-encoding@0.7.0/lib/encoding.min.js"></script>
    <script on:load={goSetup} src="/wasm_exec.js"></script>
</svelte:head>

<div id="page">
    <h1>Protolock</h1>
    <p>
        <a href="https://circleci.com/gh/nilslice/protolock/tree/master" target="_blank" rel="noopener noreferrer"><img src="https://circleci.com/gh/nilslice/protolock/tree/master.svg?style=svg" alt="CircleCI" /></a>
        <a href="https://godoc.org/github.com/nilslice/protolock" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/badge/godoc-reference-blue.svg?style=flat" alt="GoDoc" /></a>
        <a href="https://hub.docker.com/r/nilslice/protolock" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/docker/cloud/build/nilslice/protolock.svg" alt="Docker" /></a>
    </p>
    <p>
        Protocol Buffer companion tool. Track your .proto files and prevent changes to messages and services which impact API compatibility.
    </p>
    <p>
        Source: <a href="https://github.com/nilslice/protolock" target="_blank" rel="noopener noreferrer">github.com/nilslice/protolock</a>
    </p>

    <h2>DEMO</h2>

    <h3>Step 1: Define a .proto</h3>
    <p>Either use the demo <code>demo.proto</code> or write your own here:</p>
    <Input/>

    <h3>Step 2: Initialize a <code>proto.lock</code> file:</h3>
    <Init/>

    {#if $lock}
    <label><code>proto.lock</code></label>
    <textarea disabled>{JSON.stringify($lock)}</textarea>
    {/if}

    <h3>Step 3: Modify the .proto and check for API compatibility issues</h3>
    <Status/>

    <Report/>

    <footer>
        <hr>
        Compiled with <a href="https://golang.org" target="_blank" rel="noopener noreferrer">Go</a> (wasm) <span class="dot">&middot;</span> Demo built with <a href="https://svelte.dev" target="_blank" rel="noopener noreferrer">Svelte</a> <span class="dot">&middot;</span> Demo <a href="https://github.com/nilslice/protolock-web" target="_blank" rel="noopener noreferrer">source code</a> (BSD-3)
        <br>
        &copy; {year} <a href="https://twitter.com/nilslice" target="_blank">Steve Manuel</a>
    </footer>
</div>

<style>
    footer {
        padding: 40px 0;
        margin: auto;
        width: 100%;
        text-align: center;
    }
</style>