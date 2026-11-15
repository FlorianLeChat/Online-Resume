<script lang="ts">
    import data from "#lib/data/default.json";
    import { formatDate } from "#lib/utilities/date.ts";
    import type { Configuration } from "#lib/types/configuration.ts";

    const configuration: Configuration = data;
    const translations = configuration.translations;
</script>

{#if configuration.educations}
    <section>
        <h2>{translations.educations}</h2>

        {#each configuration.educations as education ( education )}
            {@const startDate = formatDate( education.startDate )}
            {@const endDate = education.endDate ? formatDate( education.endDate ) : ""}

            <article>
                <header>
                    <h3>{education.degree}</h3>

                    <div class="time">
                        {#if education.endDate}
                            <time datetime={startDate}>{startDate}</time>
                            -
                            <time datetime={endDate}>{endDate}</time>
                        {:else}
                            <time datetime={startDate}>{startDate}</time>
                            - {translations.present}
                        {/if}
                    </div>

                    <p class="organization">{education.institution} - {education.location}</p>

                    {#if education.statement}
                        <small>
                            {education.statement}
                        </small>
                    {/if}
                </header>

                {#if Array.isArray( education.description )}
                    <ul>
                        {#each education.description as description ( description )}
                            <li>{@html description}</li>
                        {/each}
                    </ul>
                {:else}
                    <p>{@html education.description}</p>
                {/if}
            </article>
        {/each}
    </section>
{/if}

<style>
    small {
        width: fit-content;
        display: block;
        font-size: 0.875rem;
    }

    p,
    li {
        font-size: 0.875rem;
    }

    li {
        margin-bottom: 0.25rem;
    }
</style>
