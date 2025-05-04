<script>
	// Importation des dépendances et composants.
	import config from "../data/default.json";
</script>

<section>
	<h2>Loisirs</h2>

	{#each config.hobbies as hobby ( hobby )}
		<p>{@html hobby}</p>
	{/each}
</section>

<style>
	p {
		/* Description des loisirs */
		font-size: 0.875rem;
	}
</style>