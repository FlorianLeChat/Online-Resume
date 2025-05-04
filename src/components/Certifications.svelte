<script lang="ts">
	// Importation des dépendances et composants.
	import Link from "./Link.svelte";
	import data from "../data/default.json";
	import { formatDate } from "../utilities/date";
	import type { ConfigurationProperties } from "../interfaces/ConfigurationProperties";

	// Récupération de la configuration et des traductions.
	const configuration: ConfigurationProperties = data;
	const translations = configuration.translations;
</script>

{#if configuration.certifications}
	<section>
		<h2>{translations.certifications}</h2>

		{#each configuration.certifications as certification ( certification )}
			<h3>
				<!-- Intitulé de la certification et nom de l'organisme -->
				{certification.name}, {certification.issuer}
			</h3>

			<small class="time">
				<!-- Date de délivrance de la certification -->
				<time datetime={certification.date}>
					{formatDate( certification.date )}
				</time>
			</small>

			<!-- Lien vers le site de l'entreprise -->
			{#if certification.link}
				<Link
					url={certification.link}
					title={translations.certifications}
				/>
			{/if}
		{/each}
	</section>
{/if}