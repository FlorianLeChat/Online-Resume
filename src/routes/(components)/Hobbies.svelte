<script lang="ts">
    import data from "#lib/data/default.json";
    import { stripEmoji } from "#lib/utilities/text.ts";
    import type { Configuration } from "#lib/types/configuration.ts";

    let { ats = false } = $props();

    const configuration: Configuration = data;
    const translations = configuration.translations;
</script>

{#if configuration.hobbies}
    <section>
        <h2>{translations.hobbies}</h2>

        {#each configuration.hobbies as hobby ( hobby )}
            <p>{@html ats ? stripEmoji( hobby ) : hobby}</p>
        {/each}
    </section>
{/if}

<style>
    p {
        font-size: 0.875rem;
    }
</style>
