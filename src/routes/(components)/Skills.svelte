<script lang="ts">
    import data from "$lib/data/default.json";
    import type { Configuration } from "$lib/types/configuration";

    const configuration: Configuration = data;
    const translations = configuration.translations;
</script>

{#if configuration.skills}
    <section>
        <h2>{translations.skills}</h2>

        <ul>
            {#each configuration.skills as skill ( skill )}
                <li>
                    <u>{skill.name}</u> : <code>{skill.data.join( ", " )}</code>
                </li>
            {/each}
        </ul>
    </section>
{/if}
