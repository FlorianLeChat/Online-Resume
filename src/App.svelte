<script lang="ts">
	// Importation des dépendances.
	import data from "./data/default.json";
	import type { ConfigurationProperties } from "./interfaces/ConfigurationProperties";

	// Importation des composants.
	import GitHubCorner from "./components/GitHubCorner.svelte";
	import Header from "./components/Header.svelte";
	import Profile from "./components/Profile.svelte";
	import Skills from "./components/Skills.svelte";
	import Certifications from "./components/Certifications.svelte";
	import Experiences from "./components/Experiences.svelte";
	import Educations from "./components/Educations.svelte";
	import Hobbies from "./components/Hobbies.svelte";
	import PrintButton from "./components/PrintButton.svelte";

	// Récupération de la configuration.
	const configuration: ConfigurationProperties = data;
</script>

<main lang={configuration.locale}>
	<!-- Logo GitHub -->
	<GitHubCorner />

	<!-- En-tête de la page -->
	<Header />

	<!-- Profil de la personne -->
	<Profile />

	<!-- Compétences de la personne -->
	<Skills />

	<!-- Certifications obtenues -->
	<Certifications />

	<!-- Expériences professionnelles -->
	<Experiences />

	<!-- Formations scolaires -->
	<Educations />

	<!-- Loisirs -->
	<Hobbies />

	<!-- Bouton d'impression -->
	<PrintButton />
</main>