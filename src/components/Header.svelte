<script lang="ts">
	// Importation des dépendances et composants.
	import Link from "./Link.svelte";
	import config from "../data/default.json";

	// Calcul de l'âge à partir de la date de naissance.
	const getAge = ( birthDate: string ) =>
	{
		const date = new Date();
		date.setTime( date.getTime() - Date.parse( birthDate ) );

		return date.getFullYear() - 1970;
	};
</script>

<header>
	<!-- Nom et prénom de la personne -->
	<h1>{config.name}</h1>

	<!-- Titre du poste recherché -->
	<p>{config.job}</p>

	<ul>
		<!-- Informations de contact -->
		<li>📧 <a href="mailto:{config.email}">{config.email}</a> |</li>
		<li>📞 <a href="tel:{config.phone}">{config.phone}</a> |</li>
		<li>📍 {config.address} |</li>
		<li>🎂 {getAge( config.birthDate )} ans</li>
		{#if config.hasVehicle}
			<li>| 🚗 Véhiculé</li>
		{/if}
	</ul>

	{#if config.links.length > 0}
		<ul>
			<!-- Accès vers les liens sociaux et personnels -->
			<li>🔗</li>

			{#each config.links as link, index ( link )}
				{#if index > 0}
					<li>&nbsp;|</li>
				{/if}

				<li><Link title={link.name} url={link.url} /></li>
			{/each}
		</ul>
	{/if}

	{#if config.languages.length > 0}
		<ul>
			<!-- Langues parlées -->
			<li>💬</li>

			{#each config.languages as language ( language )}
				{#if language === "en"}
					<li class="fi fi-gb"></li>
				{:else}
					<li class="fi fi-{language}"></li>
				{/if}
			{/each}
		</ul>
	{/if}
</header>

<style>
	header {
		/* Conteneur principal de l'en-tête */
		text-align: center;
		margin-bottom: 2.5rem;
		border-bottom: 1px solid rgb(170, 170, 170);
	}

	h1 {
		/* Nom et prénom de la personne */
		color: rgb(26, 124, 209);
		margin: 0;
		font-size: 2rem;
	}

	p {
		/* Titre du poste recherché */
		margin: 0.25rem 0;
	}

	ul {
		/* Liste des informations de contact */
		margin: 0.25rem 0;
		padding: 0;
		list-style: none;
	}

	ul:not(:first-of-type) {
		/* Liste des liens vers les liens sociaux et personnels */
		margin: 0 0 0.5rem 0;
		display: inline-block;
	}

	li {
		/* Éléments de la liste */
		display: inline-block;
	}

	li.fi {
		/* Icônes des langues parlées */
		margin: 0 0.25rem 0 0;
	}

	a {
		/* Adresse électronique et numéro de téléphone */
		color: inherit;
		text-decoration: none;
	}
</style>