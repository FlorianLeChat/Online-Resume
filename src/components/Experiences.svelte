<script lang="ts">
	// Importation des dépendances et composants.
	import data from "../data/default.json";
	import { formatDate } from "../utilities/date";
	import type { ConfigurationProperties } from "../interfaces/ConfigurationProperties";

	// Récupération de la configuration et des traductions.
	const configuration: ConfigurationProperties = data;
	const translations = configuration.translations;
</script>

{#if configuration.experiences}
	{@const experiences = configuration.experiences.reverse()}

	<section>
		<h2>{translations.experiences}</h2>

		{#each experiences as experience ( experience.company )}
			{@const startDate = formatDate( experience.startDate )}
			{@const endDate = experience.endDate
				? formatDate( experience.endDate )
				: ""}

			<h3>
				<!-- Intitulé du poste et nom de l'entreprise -->
				{experience.position}, {experience.company}
			</h3>

			<small class="time">
				<!-- Date de début et de fin d'activité -->
				{#if experience.endDate}
					<time datetime={startDate}>{startDate}</time>
					-
					<time datetime={endDate}>{endDate}</time>
				{:else}
					<time datetime={startDate}>{startDate}</time> - {translations.present}
				{/if}
			</small>

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

			<ul>
				<!-- Liste des activités réalisées dans le cadre de l'expérience -->
				{#each experience.description as description ( description )}
					<li>{@html description}</li>
				{/each}
			</ul>
		{/each}
	</section>
{/if}

<style>
	li {
		/* Description de l'expérience */
		font-size: 0.875rem;
	}
</style>