<script>
    import { lock, input, errors, runCount } from './store.js'

    $: disabled = $lock ? false : true

    function status() {
        // create an updated lock representation of the .proto & run status
        errors.set([])
        const report = window.protolock.status(
            JSON.stringify($lock), $input
        )
        errors.update(errors => JSON.parse(report))
        runCount.update(n => n+=1)

        setTimeout(() => {
            document.body && window.scrollTo(0, document.body.scrollHeight);
        }, 1)
    }
</script>

<button on:click={status} {disabled}>$ protolock status</button>
(click to check your .proto backward-compatibility)
