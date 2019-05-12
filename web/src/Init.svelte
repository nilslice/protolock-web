<script>
    import { input, lock } from './store.js'
    let disabled = false

    function init() {
        // call the wasm module function to initialize the proto.lock file
        const lockfile = window.protolock.initialize($input);
        if (!lockfile) {
            console.log("init: something went wrong");
        }
        // store the locked state
        lock.update(lock => JSON.parse(lockfile))
        disabled = true

        setTimeout(() => {
            document.body && window.scrollTo(0, document.body.scrollHeight);
        }, 1)
    }  
</script>

<button on:click={init} {disabled}>$ protolock init</button>
(click to lock your .proto definition)