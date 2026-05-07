<script lang="ts">
    import data from "$lib/data/default.json";
    import type { Configuration } from "$lib/types/configuration";

    const configuration: Configuration = data;
    const translations = configuration.translations;
</script>

<section>
    <h2>{translations.profile}</h2>

    <p>{configuration.description}</p>
</section>

<style>
    p {
        font-size: 0.875rem;
        font-style: italic;
    }
</style>
