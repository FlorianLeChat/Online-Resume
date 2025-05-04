<script lang="ts">
	// Importation des dépendances et composants.
	import data from "../data/default.json";
	import { formatDate } from "../utilities/date";
	import type { ConfigurationProperties } from "../interfaces/ConfigurationProperties";

	// Récupération de la configuration et des traductions.
	const configuration: ConfigurationProperties = data;
	const translations = configuration.translations;
</script>

{#if configuration.educations}
	<section>
		<h2>{translations.educations}</h2>

		{#each configuration.educations as education ( education.institution )}
			{@const startDate = formatDate( education.startDate )}
			{@const endDate = education.endDate
				? formatDate( education.endDate )
				: ""}

			<h3>
				<!-- Intitulé de la formation et nom de l'établissement -->
				{education.degree}, {education.institution}
			</h3>

			<small class="time">
				<!-- Date de début et de fin d'activité -->
				{#if education.endDate}
					<time datetime={startDate}>{startDate}</time>
					-
					<time datetime={endDate}>{endDate}</time>
				{:else}
					<time datetime={startDate}>{startDate}</time> - {translations.present}
				{/if}
			</small>

			{#if education.statement}
				<small>
					<!-- Situation de la formation (en cours, terminée, etc.) -->
					{education.statement}
				</small>
			{/if}

			<!-- Description de la formation -->
			<p>{@html education.description}</p>
		{/each}
	</section>
{/if}

<style>
	small:not(.time) {
		/* État de la formation (en cours, terminée, etc.) */
		width: fit-content;
		display: block;
		font-size: 0.75rem;
	}

	p {
		/* Description de la formation */
		font-size: 0.875rem;
	}
</style>