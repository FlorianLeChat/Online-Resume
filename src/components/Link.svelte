<script>
    import qrCode from "qrcode";

    let { title, url } = $props();
</script>

{#await qrCode.toDataURL( url )}
    <p>...</p>
{:then dataUrl}
    <figure>
        <img src={dataUrl} alt={title} />
        <figcaption>{title}</figcaption>
    </figure>
{/await}

<a href={url} target="_blank" rel="noopener noreferrer">
    {title}
</a>

<style>
    figure {
        margin: 0;
        text-align: center;
    }

    a {
        color: inherit;
        text-decoration: dotted underline;
        text-underline-offset: 2px;
    }

    @media screen {
        figure {
            display: none;
        }
    }

    @media print {
        img {
            width: 100px;
            height: 100px;
        }

        a {
            display: none;
        }
    }
</style>
