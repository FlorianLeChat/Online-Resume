<script lang="ts">
    import Link from "./Link.svelte";
    import data from "$lib/data/default.json";
    import { SvelteDate } from "svelte/reactivity";
    import type { Configuration } from "$lib/types/configuration";

    const configuration: Configuration = data;
    const translations = configuration.translations;

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

    {#if configuration.languages}
        {#each configuration.languages as language ( language )}
            {#if language === "en"}
                <span class="fi fi-gb"></span>
            {:else}
                <span class="fi fi-{language}"></span>
            {/if}
        {/each}
    {/if}

    <ul>
        <li>
            📧 <a href="mailto:{configuration.email}">{configuration.email}</a> |
        </li>

        <li>
            📞 <a href="tel:{configuration.phone}">{configuration.phone}</a> |
        </li>

        <li>
            📍 {configuration.address} |
        </li>

        <li>
            🎂 {getAge( configuration.birthDate )} ans
        </li>

        {#if configuration.hasVehicle}
            <li>| 🚗 {translations.licence}</li>
        {/if}
    </ul>

    {#if configuration.websites}
        <ul>
            {#each configuration.websites as website, index ( website )}
                {#if index > 0}
                    <li class="space">&nbsp;|</li>
                {/if}

                <li>
                    <Link title={website.name} url={website.url} />
                </li>
            {/each}
        </ul>
    {/if}
</header>

<style>
    header {
        text-align: center;
        margin-bottom: 2.5rem;
        border-bottom: 1px solid rgb(170, 170, 170);
    }

    h1 {
        color: rgb(26, 124, 209);
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

    @media print {
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
