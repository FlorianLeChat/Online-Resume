<script lang="ts">
    import data from "$lib/data/default.json";
    import type { Configuration } from "$lib/types/configuration";

    const configuration: Configuration = data;
    const translations = configuration.translations;
</script>

<button on:click={() => window.print()}>📄 {translations.export}</button>

<style>
    button {
        color: white;
        border: none;
        cursor: pointer;
        padding: 5px 10px;
        font-size: 0.875rem;
        border-radius: 4px;
        background-color: rgb(26, 124, 209);
    }

    button:hover {
        background-color: rgb(0, 86, 179);
    }

    @media print {
        button {
            display: none;
        }
    }
</style>
