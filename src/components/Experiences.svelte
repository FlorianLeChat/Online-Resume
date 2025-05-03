<script lang="ts">
	// Importation des dépendances et composants.
	import config from "../data/default.json";
	import { formatDate } from "../utilities/date";

	// Inversion de l'ordre des expériences pour les afficher du plus récent au plus ancien.
	const experiences = config.experiences.reverse();
</script>

<section>
	<h2>Expériences Professionnelles</h2>

	{#each experiences as experience ( experience.company )}
		{@const startDate = formatDate( experience.startDate )}
		{@const endDate = experience.endDate
			? formatDate( experience.endDate )
			: ""}

		<h3>
			<!-- Intitulé du poste et nom de l'entreprise. -->
			{experience.position}, {experience.company}
		</h3>

		<small>
			<!-- Date de début et de fin d'activité -->
			{#if experience.endDate}
				{startDate} - {endDate}
			{:else}
				{startDate} - Présent
			{/if}
		</small>

		<!-- Lien vers le site de l'entreprise. -->
		<a href={experience.link} target="_blank" rel="noopener noreferrer">
			{experience.link}
		</a>

		<ul>
			<!-- Liste des activités réalisées dans le cadre de l'expérience. -->
			{#each experience.description as description ( description )}
				<li>{description}</li>
			{/each}
		</ul>
	{/each}
</section>

<style>
	h3 {
		/* Intitulé du poste et nom de l'entreprise. */
		display: inline;
		font-size: 1rem;
		margin-top: 1rem;
		margin-bottom: 0.5rem;
	}

	a {
		/* Lien vers le site de l'entreprise. */
		color: inherit;
		width: fit-content;
		display: block;
		font-size: 0.75rem;
		text-decoration: dotted underline;
		text-underline-offset: 2px;
	}

	@media print {
		/* L'affichage du lien est désactivé en mode d'impression */
		a {
			display: none;
		}
	}

	small {
		/* Date de début et de fin d'activité */
		float: right;
		margin-left: auto;
	}
</style>