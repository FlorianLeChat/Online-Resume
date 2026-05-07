<script lang="ts">
    import Link from "./Link.svelte";
    import data from "$lib/data/default.json";
    import { formatDate } from "$lib/utilities/date";
    import type { Configuration } from "$lib/types/configuration";

    const configuration: Configuration = data;
    const translations = configuration.translations;
</script>

{#if configuration.certifications}
    <section>
        <h2>{translations.certifications}</h2>

        {#each configuration.certifications as certification ( certification )}
            <h3>
                {certification.name}, {certification.issuer}
            </h3>

            <small class="time">
                <time datetime={certification.date}>
                    {formatDate( certification.date )}
                </time>
            </small>

            {#if certification.link}
                <Link
                    url={certification.link}
                    title={translations.certifications}
                />
            {/if}
        {/each}
    </section>
{/if}
