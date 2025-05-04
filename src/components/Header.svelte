<script lang="ts">
	// Importation des dépendances et composants.
	import Link from "./Link.svelte";
	import data from "../data/default.json";
	import type { ConfigurationProperties } from "../interfaces/ConfigurationProperties";

	// Récupération de la configuration et des traductions.
	const configuration: ConfigurationProperties = data;
	const translations = configuration.translations;

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
	<h1>{configuration.name}</h1>

	<!-- Titre du poste recherché -->
	<p>{configuration.job}</p>

	{#if configuration.languages}
		<!-- Langues parlées -->
		{#each configuration.languages as language ( language )}
			{#if language === "en"}
				<span class="fi fi-gb"></span>
			{:else}
				<span class="fi fi-{language}"></span>
			{/if}
		{/each}
	{/if}

	<ul>
		<!-- Informations de contact -->
		<li>
			📧 <a href="mailto:{configuration.email}">{configuration.email}</a> |
		</li>

		<li>
			📞 <a href="tel:{configuration.phone}">{configuration.phone}</a> |
		</li>

		<li>
			📍 {configuration.address} |
		</li>

		<li>
			🎂 {getAge( configuration.birthDate )} ans
		</li>

		{#if configuration.hasVehicle}
			<li>| 🚗 {translations.licence}</li>
		{/if}
	</ul>

	{#if configuration.websites}
		<ul>
			<!-- Accès vers les liens sociaux et personnels -->
			{#each configuration.websites as website, index ( website.url )}
				{#if index > 0}
					<li class="space">&nbsp;|</li>
				{/if}

				<li><Link title={website.name} url={website.url} /></li>
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
		margin: 0.25rem 0.25rem 0 0;
		display: inline-block;
	}

	ul {
		/* Liste des informations de contact */
		margin: 0.25rem 0;
		padding: 0;
		list-style: none;
	}

	ul:last-of-type {
		/* Liste des liens vers les liens sociaux et personnels */
		margin: 0 0 0.5rem 0;
		display: inline-block;
	}

	li {
		/* Éléments de la liste */
		display: inline-block;
	}

	@media print {
		ul:last-of-type {
			/* En mode d'impression, les codes QR doivent être suffisamment espacés pour être lisibles */
			display: flex;
			justify-content: space-evenly;
		}

		li.space {
			/* En mode d'impression, les espacements sont masqués */
			display: none;
		}
	}

	span {
		/* Icônes des langues parlées */
		margin: 0 0.25rem 0 0;
	}

	a {
		/* Adresse électronique et numéro de téléphone */
		color: inherit;
		text-decoration: none;
	}
</style>