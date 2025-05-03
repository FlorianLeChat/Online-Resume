<script lang="ts">
	// Importation des dépendances et composants.
	import config from "../data/default.json";
	import { formatDate } from "../utilities/date";
</script>

<section>
	<h2>Certifications</h2>

	{#each config.certifications as certification ( certification.issuer )}
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

		<!-- Lien vers le site de l'entreprise. -->
		<a href={certification.link} target="_blank" rel="noopener noreferrer">
			{certification.link}
		</a>
	{/each}
</section>