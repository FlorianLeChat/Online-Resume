<script>
	// Importation des dépendances et composants.
	import config from "../data/default.json";
</script>

<section>
	<h2>Compétences</h2>

	<ul>
		<li>Langages : {config.skills.languages.join( ", " )}</li>
		<li>Frameworks : {config.skills.frameworks.join( ", " )}</li>
		<li>Base de données : {config.skills.database.join( ", " )}</li>
		<li>Outils : {config.skills.tools.join( ", " )}</li>
	</ul>
</section>