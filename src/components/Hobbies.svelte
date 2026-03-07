<script lang="ts">
	import data from "../data/default.json";
	import type { ConfigurationProperties } from "../interfaces/ConfigurationProperties";

	const configuration: ConfigurationProperties = data;
	const translations = configuration.translations;
</script>

{#if configuration.hobbies}
	<section>
		<h2>{translations.hobbies}</h2>

		{#each configuration.hobbies as hobby ( hobby )}
			<p>{@html hobby}</p>
		{/each}
	</section>
{/if}

<style>
	p {
		font-size: 0.875rem;
	}
</style>