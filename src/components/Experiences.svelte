<script>
	// Importation des dépendances et composants.
	import config from "../data/default.json";
	import { formatDate } from "../utilities/date";

	// Inversion de l'ordre des expériences pour les afficher du plus récent au plus ancien.
	const experiences = config.experiences.reverse();
</script>

<section>
	<h2>Expériences professionnelles</h2>

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
				<time datetime={startDate}>{startDate}</time> - Présent
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