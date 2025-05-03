<script>
	// Importation des dépendances et composants.
	import config from "./data/_example.json";
	import Header from "./components/Header.svelte";
	import Profile from "./components/Profile.svelte";
	import Skills from "./components/Skills.svelte";
	import Experiences from "./components/Experiences.svelte";
	import Education from "./components/Education.svelte";
</script>

<main lang={config.locale}>
	<Header />
	<Profile />

	{#if config.skills}
		<Skills />
	{/if}

	{#if config.experiences.length > 0}
		<Experiences />
	{/if}

	{#if config.educations.length > 0}
		<Education />
	{/if}
</main>