<script>
	// Importation des dépendances et composants.
	import config from "../data/default.json";
</script>

<section>
	<h2>Formation</h2>

	{#each config.educations as education ( education.institution )}
		<h3>
			<!-- Intitulé de la formation et nom de l'établissement -->
			{education.degree}, {education.institution}
		</h3>

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
	h3 {
		/* Intitulé du poste et nom de l'entreprise. */
		display: inline;
		font-size: 1rem;
		margin-top: 1rem;
		margin-bottom: 0.5rem;
	}

	small {
		/* Date de début et de fin d'activité */
		width: fit-content;
		display: block;
	}
</style>