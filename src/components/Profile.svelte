<script lang="ts">
	// Importation des dépendances et composants.
	import data from "../data/default.json";
	import type { ConfigurationProperties } from "../interfaces/ConfigurationProperties";

	// Récupération de la configuration et des traductions.
	const configuration: ConfigurationProperties = data;
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