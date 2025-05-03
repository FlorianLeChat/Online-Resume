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
	<img src={dataUrl} alt="QR Code" />
{/await}

<!-- Lien vers un lien quelconque -->
<a href={url} target="_blank" rel="noopener noreferrer">
	{title}
</a>

<style>
	img {
		/* QR Code en mode écran */
		display: none;
	}

	a {
		/* Lien vers un lien quelconque */
		color: inherit;
		text-decoration: dotted underline;
		text-underline-offset: 2px;
	}

	@media print {
		/* En mode d'impression, le QR Code est affiché et le lien est masqué */
		img {
			display: block;
		}

		a {
			display: none;
		}
	}
</style>