<script lang="ts">
    import Link from "./Link.svelte";
    import PrintButton from "./PrintButton.svelte";
    import Switcher from "./Switcher.svelte";
    import data from "#lib/data/default.json";
    import { SvelteDate } from "svelte/reactivity";
    import { formatLanguages } from "#lib/utilities/text.ts";
    import type { Configuration } from "#lib/types/configuration.ts";

    let { ats = false } = $props();

    const configuration: Configuration = data;
    const translations = configuration.translations;
    const languageNames = new Intl.DisplayNames( configuration.locale, { type: "language" } );

    const getAge = ( birthDate: string ) =>
    {
        const date = new SvelteDate();
        date.setTime( date.getTime() - Date.parse( birthDate ) );

        return date.getFullYear() - 1970;
    };
</script>

<header>
    <h1>{configuration.name}</h1>

    <p>{configuration.job}</p>

    {#if ats}
        <p class="contact">
            <a href="mailto:{configuration.email}">{configuration.email}</a> |
            <a href="tel:{configuration.phone}">{configuration.phone}</a> |
            {configuration.address} |
            {getAge( configuration.birthDate )} {translations.years}

            {#if configuration.hasVehicle}
                | {translations.licence}
            {/if}

            {#if configuration.languages}
                | {translations.languages} : {formatLanguages( configuration.languages, configuration.locale )}
            {/if}
        </p>

        {#if configuration.websites}
            <ul class="ats">
                {#each configuration.websites as website ( website )}
                    <li>
                        <Link title={website.name} url={website.url} {ats} />
                    </li>
                {/each}
            </ul>
        {/if}
    {:else}
        {#if configuration.languages}
            {#each configuration.languages as language ( language )}
                {#if language === "en"}
                    <span class="fi fi-gb" role="img" aria-label={languageNames.of( language )}></span>
                {:else}
                    <span class="fi fi-{language}" role="img" aria-label={languageNames.of( language )}></span>
                {/if}
            {/each}
        {/if}

        <ul>
            <li>
                <span aria-hidden="true">📧</span> <a href="mailto:{configuration.email}">{configuration.email}</a>
            </li>

            <li>
                <span aria-hidden="true">📞</span> <a href="tel:{configuration.phone}">{configuration.phone}</a>
            </li>

            <li>
                <span aria-hidden="true">📍</span> {configuration.address}
            </li>

            <li>
                <span aria-hidden="true">🎂</span> {getAge( configuration.birthDate )} {translations.years}
            </li>

            {#if configuration.hasVehicle}
                <li><span aria-hidden="true">🚗</span> {translations.licence}</li>
            {/if}
        </ul>

        {#if configuration.websites}
            <ul>
                {#each configuration.websites as website, index ( website )}
                    {#if index > 0}
                        <li class="space" aria-hidden="true">|</li>
                    {/if}

                    <li>
                        <Link title={website.name} url={website.url} />
                    </li>
                {/each}
            </ul>
        {/if}
    {/if}

    <div class="actions">
        <Switcher {ats} />
        <PrintButton />
    </div>
</header>

<style>
    header {
        text-align: center;
        margin-bottom: 2.5rem;
        border-bottom: 1px solid rgb(170, 170, 170);
    }

    h1 {
        color: rgb(0, 86, 179);
        margin: 0;
        font-size: 2rem;
    }

    p {
        margin: 0.25rem 0.25rem 0 0;
        display: inline-block;
    }

    ul {
        margin: 0.25rem 0;
        padding: 0;
        list-style: none;
    }

    ul:last-of-type {
        margin: 0 0 0.5rem 0;
        display: inline-block;
    }

    li {
        display: inline-block;
    }

    ul:not(.ats) > li:not(.space) + li:not(.space)::before {
        content: "|";
        margin: 0 0.5ch;
    }

    li.space {
        margin: 0 0.5ch;
    }

    @media screen and (max-width: 768px) {
        ul:not(.ats) {
            gap: 0.25rem 1rem;
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
        }

        ul:not(.ats) > li::before {
            content: none !important;
        }

        li.space {
            display: none;
        }
    }

    p.contact {
        display: block;
        font-size: 0.875rem;
        margin: 0.25rem 0 0 0;
    }

    ul.ats:last-of-type {
        gap: 0.25rem 1rem;
        flex-wrap: wrap;
        display: flex;
        font-size: 0.875rem;
        justify-content: center;
    }

    .actions {
        gap: 0.75rem;
        display: flex;
        flex-wrap: wrap;
        align-items: stretch;
        margin: 0.5rem 0;
        justify-content: center;
    }

    @media print {
        .actions {
            display: none;
        }

        ul:last-of-type {
            display: flex;
            justify-content: space-evenly;
        }

        li.space {
            display: none;
        }
    }

    span {
        margin: 0 0.25rem 0 0;

        /* Force the display of flag icons in print mode */
        /* https://stackoverflow.com/a/44908040 */
        print-color-adjust: exact;
        -webkit-print-color-adjust: exact;
    }

    a {
        color: inherit;
        text-decoration: none;
    }
</style>
