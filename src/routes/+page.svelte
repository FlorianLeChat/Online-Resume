<script lang="ts">
    import data from "$lib/data/default.json";
    import { env } from "$env/dynamic/public";
    import type { Configuration } from "$lib/types/configuration";

    import GitHubCorner from "./(components)/GitHubCorner.svelte";
    import Header from "./(components)/Header.svelte";
    import Profile from "./(components)/Profile.svelte";
    import Skills from "./(components)/Skills.svelte";
    import Certifications from "./(components)/Certifications.svelte";
    import Experiences from "./(components)/Experiences.svelte";
    import Educations from "./(components)/Educations.svelte";
    import Hobbies from "./(components)/Hobbies.svelte";
    import PrintButton from "./(components)/PrintButton.svelte";

    const configuration: Configuration = data;
</script>

<main lang={configuration.locale}>
    <code>{ env.PUBLIC_VERSION ?? "0.0.1" }</code>

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

<style>
    code {
        top: 0.25rem;
        left: 0.25rem;
        position: absolute;
        font-size: 0.875rem;
    }

    @media print {
        code {
            display: none;
        }
    }
</style>
