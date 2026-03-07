<script lang="ts">
	import data from "../data/default.json";
	import { calculateDuration, formatDate } from "../utilities/date";
	import type { ConfigurationProperties } from "../interfaces/ConfigurationProperties";

	const configuration: ConfigurationProperties = data;
	const translations = configuration.translations;
</script>

{#if configuration.experiences}
	{@const experiences = configuration.experiences.reverse()}

	<section>
		<h2>{translations.experiences}</h2>

		{#each experiences as experience ( experience )}
			{@const startDate = formatDate( experience.startDate )}
			{@const endDate = experience.endDate ? formatDate( experience.endDate ) : ""}
			{@const duration = calculateDuration( experience.startDate, experience.endDate )}

			<article>
				<header>
					<h3>{experience.position}</h3>

					<div class="time">
						{#if experience.endDate}
							<time datetime={startDate}>{startDate}</time>
							-
							<time datetime={endDate}>{endDate}</time>
						{:else}
							<time datetime={startDate}>{startDate}</time> - {translations.present}
						{/if}

						<br />

						{duration}
					</div>

					<h4>{experience.company} - {experience.location}</h4>

					{#if experience.link}
						<a
							rel="noopener noreferrer"
							href={experience.link}
							target="_blank"
						>
							{experience.link}
						</a>
					{/if}
				</header>

				{#if Array.isArray( experience.description )}
					<ul>
						{#each experience.description as description ( description )}
							<li>{@html description}</li>
						{/each}
					</ul>
				{:else}
					<p>{@html experience.description}</p>
				{/if}
			</article>
		{/each}
	</section>
{/if}

<style>
	p,
	li {
		font-size: 0.875rem;
	}
</style>