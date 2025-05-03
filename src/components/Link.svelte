<script>
	// Importation des dépendances et composants.
	import qrCode from "qrcode";

	// Initialisation des variables.
	let { title, url } = $props();
</script>

<!-- QR Code vers un lien quelconque -->
{#await qrCode.toDataURL( url )}
	<p>...</p>
{:then dataUrl}
	<figure>
		<img src={dataUrl} alt={title} />
		<figcaption>{title}</figcaption>
	</figure>
{/await}

<!-- Lien vers un lien quelconque -->
<a href={url} target="_blank" rel="noopener noreferrer">
	{title}
</a>

<style>
	figure {
		/* Conteneur pour le QR Code */
		margin: 0;
		text-align: center;
	}

	a {
		/* Lien vers un lien quelconque */
		color: inherit;
		text-decoration: dotted underline;
		text-underline-offset: 2px;
	}

	@media screen {
		figure {
			/* Disparition du QR Code en mode écran */
			display: none;
		}
	}

	@media print {
		/* En mode d'impression, le QR Code est affiché et le lien est masqué */
		img {
			width: 100px;
			height: 100px;
		}

		a {
			display: none;
		}
	}
</style>