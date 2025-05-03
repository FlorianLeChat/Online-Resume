<script>
	// Importation des dépendances et composants.
	import config from "../data/default.json";
</script>

<section>
	<h2>Compétences</h2>

	<ul>
		{#each config.skills as skill ( skill.name )}
			<li>{skill.name} : {skill.data.join( ", " )}</li>
		{/each}
	</ul>
</section>