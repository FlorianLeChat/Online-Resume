<script lang="ts">
    import data from "#lib/data/default.json";
    import { resolve } from "$app/paths";
    import type { Configuration } from "#lib/types/configuration.ts";

    let { ats = false } = $props();

    const configuration: Configuration = data;
    const translations = configuration.translations;
</script>

<a href={ats ? resolve( "/" ) : resolve( "/ats" )}>
    {ats ? translations.versionStandard : translations.versionAts}
</a>

<style>
    a {
        color: inherit;
        font-size: 0.875rem;
        margin-left: 0.5rem;
        text-decoration: dotted underline;
        text-underline-offset: 2px;
    }

    @media print {
        a {
            display: none;
        }
    }
</style>
