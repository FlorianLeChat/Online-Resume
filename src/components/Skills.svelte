<script lang="ts">
	// Importation des dépendances et composants.
	import data from "../data/default.json";
	import type { ConfigurationProperties } from "../interfaces/ConfigurationProperties";

	// Récupération de la configuration et des traductions.
	const configuration: ConfigurationProperties = data;
	const translations = configuration.translations;
</script>

{#if configuration.skills}
	<section>
		<h2>{translations.skills}</h2>

		<ul>
			{#each configuration.skills as skill ( skill.name )}
				<li>
					<u>{skill.name}</u> : <code>{skill.data.join( ", " )}</code>
				</li>
			{/each}
		</ul>
	</section>
{/if}