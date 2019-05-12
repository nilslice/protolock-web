<script>
    import { errors, lock, runCount } from './store.js'

    $: noErrors = $lock && ($runCount > 0)
</script>

<div class="report">
    {#if ($errors && $errors.length > 0 )}
    <h4>Compatibility Status:</h4>
    <p style="color: red">API is not backward-compatible!</p>
    <ul class="errors">
        {#each $errors as error}
        <li><code>{error.message} [{error.filepath}]</code></li>
        {/each}
    </ul>
    {:else if (noErrors)}
    <h4>Compatibility Status:</h4>
    <p style="color: green">API is backward-compatible!</p>
    {/if}
</div>