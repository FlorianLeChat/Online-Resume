<script>
	// Importation des dépendances et composants.
	import config from "./data/default.json";
	import Header from "./components/Header.svelte";
	import Profile from "./components/Profile.svelte";
	import Skills from "./components/Skills.svelte";
	import Certifications from "./components/Certifications.svelte";
	import Experiences from "./components/Experiences.svelte";
	import Educations from "./components/Educations.svelte";
</script>

<main lang={config.locale}>
	<Header />
	<Profile />

	{#if config.skills?.length > 0}
		<Skills />
	{/if}

	{#if config.certifications?.length > 0}
		<Certifications />
	{/if}

	{#if config.experiences?.length > 0}
		<Experiences />
	{/if}

	{#if config.educations?.length > 0}
		<Educations />
	{/if}
</main>