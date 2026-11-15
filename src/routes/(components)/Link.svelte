<script>
    import qrCode from "qrcode";

    let { title, url, ats = false } = $props();
</script>

{#if ats}
    <a class="ats" href={url} target="_blank" rel="noopener noreferrer external">
        {title} : {url}
    </a>
{:else}
    {#await qrCode.toDataURL( url )}
        <p>...</p>
    {:then dataUrl}
        <figure>
            <img src={dataUrl} alt={title} />
            <figcaption>{title}</figcaption>
        </figure>
    {/await}

    <a href={url} target="_blank" rel="noopener noreferrer external">
        {title}
    </a>
{/if}

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

        a:not(.ats) {
            display: none;
        }
    }
</style>
