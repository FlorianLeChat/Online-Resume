<script lang="ts">
    import data from "#lib/data/default.json";
    import { PUBLIC_VERSION } from "$app/env/public";
    import type { Configuration } from "#lib/types/configuration.ts";

    import GitHubCorner from "./GitHubCorner.svelte";
    import Header from "./Header.svelte";
    import Profile from "./Profile.svelte";
    import Skills from "./Skills.svelte";
    import Certifications from "./Certifications.svelte";
    import Experiences from "./Experiences.svelte";
    import Educations from "./Educations.svelte";
    import Hobbies from "./Hobbies.svelte";
    import PrintButton from "./PrintButton.svelte";
    import Switcher from "./Switcher.svelte";

    let { ats = false } = $props();

    const configuration: Configuration = data;
</script>

<svelte:head>
    <title>{configuration.name} - Curriculum Vitae{ats ? " (ATS)" : ""}</title>
</svelte:head>

<main lang={configuration.locale} class:ats>
    <code>{ PUBLIC_VERSION }</code>

    {#if !ats}
        <GitHubCorner />
    {/if}

    <Header {ats} />
    <Profile />
    <Skills />
    <Certifications {ats} />
    <Experiences />
    <Educations />
    <Hobbies {ats} />
    <PrintButton />
    <Switcher {ats} />
</main>

<style>
    code {
        top: 0.25rem;
        left: 0.25rem;
        position: absolute;
        font-size: 0.75rem;
    }

    @media print {
        code {
            display: none;
        }
    }
</style>
