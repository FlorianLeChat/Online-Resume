<script>
	// Importation des dépendances et composants.
	import config from "./data/default.json";
	import Header from "./components/Header.svelte";
	import Profile from "./components/Profile.svelte";
	import Skills from "./components/Skills.svelte";
	import Certifications from "./components/Certifications.svelte";
	import Experiences from "./components/Experiences.svelte";
	import Educations from "./components/Educations.svelte";
	import GitHubCorner from "./components/GitHubCorner.svelte";
</script>

<main lang={config.locale}>
	<!-- Logo GitHub -->
	<GitHubCorner />

	<!-- En-tête de la page -->
	<Header />

	<!-- Profil de la personne -->
	<Profile />

	<!-- Compétences de la personne -->
	{#if config.skills?.length > 0}
		<Skills />
	{/if}

	<!-- Certifications obtenues -->
	{#if config.certifications?.length > 0}
		<Certifications />
	{/if}

	<!-- Expériences professionnelles -->
	{#if config.experiences?.length > 0}
		<Experiences />
	{/if}

	<!-- Formations scolaires -->
	{#if config.educations?.length > 0}
		<Educations />
	{/if}
</main>