<script lang="ts">
    import data from "./data/default.json";
    import type { ConfigurationProperties } from "./interfaces/ConfigurationProperties";

    import GitHubCorner from "./components/GitHubCorner.svelte";
    import Header from "./components/Header.svelte";
    import Profile from "./components/Profile.svelte";
    import Skills from "./components/Skills.svelte";
    import Certifications from "./components/Certifications.svelte";
    import Experiences from "./components/Experiences.svelte";
    import Educations from "./components/Educations.svelte";
    import Hobbies from "./components/Hobbies.svelte";
    import PrintButton from "./components/PrintButton.svelte";

    const configuration: ConfigurationProperties = data;
</script>

<main lang={configuration.locale}>
    <GitHubCorner />
    <Header />
    <Profile />
    <Skills />
    <Certifications />
    <Experiences />
    <Educations />
    <Hobbies />
    <PrintButton />
</main>
