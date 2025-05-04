<script lang="ts">
	// Importation des dépendances et composants.
	import data from "../data/default.json";
	import { calculateDuration, formatDate } from "../utilities/date";
	import type { ConfigurationProperties } from "../interfaces/ConfigurationProperties";

	// Récupération de la configuration et des traductions.
	const configuration: ConfigurationProperties = data;
	const translations = configuration.translations;
</script>

{#if configuration.experiences}
	{@const experiences = configuration.experiences.reverse()}

	<section>
		<h2>{translations.experiences}</h2>

		{#each experiences as experience ( experience )}
			{@const startDate = formatDate( experience.startDate )}
			{@const endDate = experience.endDate
				? formatDate( experience.endDate )
				: ""}

			<!-- Intitulé du poste -->
			<h3>{experience.position}</h3>

			<div class="time">
				<!-- Date de début et de fin d'activité -->
				{#if experience.endDate}
					<time datetime={startDate}>{startDate}</time>
					-
					<time datetime={endDate}>{endDate}</time>
				{:else}
					<time datetime={startDate}>{startDate}</time> - {translations.present}
				{/if}

				<br />

				<!-- Durée de l'activité -->
				{calculateDuration( experience.startDate, experience.endDate )}
			</div>

			<!-- Nom de l'entreprise et localisation -->
			<h4>{experience.company} - {experience.location}</h4>

			<!-- Lien vers le site de l'entreprise -->
			{#if experience.link}
				<a
					rel="noopener noreferrer"
					href={experience.link}
					target="_blank"
				>
					{experience.link}
				</a>
			{/if}

			<!-- Liste/description des activités réalisées dans le cadre de l'expérience -->
			{#if Array.isArray( experience.description )}
				<ul>
					{#each experience.description as description ( description )}
						<li>{@html description}</li>
					{/each}
				</ul>
			{:else}
				<p>{@html experience.description}</p>
			{/if}
		{/each}
	</section>
{/if}

<style>
	p,
	li {
		/* Description de la formation */
		font-size: 0.875rem;
	}
</style>