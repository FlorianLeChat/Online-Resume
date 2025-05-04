<script>
	// Importation des dépendances et composants.
	import config from "../data/default.json";
</script>

<section>
	<h2>Compétences</h2>

	<ul>
		{#each config.skills as skill ( skill.name )}
			<li><u>{skill.name}</u> : <code>{skill.data.join( ", " )}</code></li>
		{/each}
	</ul>
</section>