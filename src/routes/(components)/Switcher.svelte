<script lang="ts">
    import data from "#lib/data/default.json";
    import { resolve } from "$app/paths";
    import type { Configuration } from "#lib/types/configuration.ts";

    let { ats = false } = $props();

    const configuration: Configuration = data;
    const translations = configuration.translations;
</script>

<a href={ats ? resolve( "/" ) : resolve( "/ats" )}>
    <span aria-hidden="true">{ats ? "🎨" : "🤖"}</span> {ats ? translations.versionStandard : translations.versionAts}
</a>

<style>
    a {
        color: rgb(0, 86, 179);
        border: 1px solid rgb(0, 86, 179);
        padding: 4px 10px;
        font-size: 0.875rem;
        line-height: normal;
        border-radius: 4px;
        text-decoration: none;
    }

    a:hover {
        background-color: rgba(0, 86, 179, 0.08);
    }

    @media print {
        a {
            display: none;
        }
    }
</style>
