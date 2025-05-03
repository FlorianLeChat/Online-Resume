<script>
	// Importation des dépendances et composants.
	import config from "../data/default.json";
	import { formatDate } from "../utilities/date";
</script>

<section>
	<h2>Formation</h2>

	{#each config.educations as education ( education.institution )}
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
				<time datetime={startDate}>{startDate}</time> - Présent
			{/if}
		</small>

		{#if education.statement}
			<small>
				<!-- Situation de la formation (en cours, terminée, etc.) -->
				{education.statement}
			</small>
		{/if}

		<!-- Description de la formation -->
		<p>{education.description}</p>
	{/each}
</section>

<style>
	small:not(.time) {
		/* État de la formation (en cours, terminée, etc.) */
		width: fit-content;
		display: block;
		font-size: 0.75rem;
	}
</style>