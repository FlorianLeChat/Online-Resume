<script lang="ts">
    import data from "#lib/data/default.json";
    import type { Configuration } from "#lib/types/configuration.ts";

    const configuration: Configuration = data;
    const translations = configuration.translations;
</script>

<button onclick={() => window.print()}><span aria-hidden="true">📄</span> {translations.export}</button>

<style>
    button {
        color: white;
        border: 1px solid rgb(0, 86, 179);
        cursor: pointer;
        padding: 4px 10px;
        font-size: 0.875rem;
        line-height: normal;
        border-radius: 4px;
        background-color: rgb(0, 86, 179);
    }

    button:hover {
        background-color: rgb(0, 64, 140);
    }

    @media print {
        button {
            display: none;
        }
    }
</style>
