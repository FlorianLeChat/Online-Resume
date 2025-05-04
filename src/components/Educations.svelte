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

		{#each configuration.educations as education ( education )}
			{@const startDate = formatDate( education.startDate )}
			{@const endDate = education.endDate
				? formatDate( education.endDate )
				: ""}

			<!-- Intitulé de la formation -->
			<h3>{education.degree}</h3>

			<div class="time">
				<!-- Date de début et de fin d'activité -->
				{#if education.endDate}
					<time datetime={startDate}>{startDate}</time>
					-
					<time datetime={endDate}>{endDate}</time>
				{:else}
					<time datetime={startDate}>{startDate}</time> - {translations.present}
				{/if}
			</div>

			<!-- Nom de l'établissement et localisation -->
			<h4>{education.institution} - {education.location}</h4>

			{#if education.statement}
				<small>
					<!-- Situation de la formation (en cours, terminée, etc.) -->
					{education.statement}
				</small>
			{/if}

			<!-- Liste/description des activités réalisées durant la formation -->
			{#if Array.isArray( education.description )}
				<ul>
					{#each education.description as description ( description )}
						<li>{@html description}</li>
					{/each}
				</ul>
			{:else}
				<p>{@html education.description}</p>
			{/if}
		{/each}
	</section>
{/if}

<style>
	small {
		/* État de la formation (en cours, terminée, etc.) */
		width: fit-content;
		display: block;
		font-size: 0.75rem;
	}

	p,
	li {
		/* Description de la formation */
		font-size: 0.875rem;
	}
</style>