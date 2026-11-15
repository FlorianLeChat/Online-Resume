export const stripEmoji = ( text: string ): string =>
{
    return text.replace( /[\p{Extended_Pictographic}️‍]/gu, "" ).trim();
};

export const formatLanguages = ( codes: string[], locale: string ): string =>
{
    const names = new Intl.DisplayNames( locale, { type: "language" } );

    return codes.map( ( code ) => names.of( code ) ?? code ).join( ", " );
};

export const hideEmoji = ( text: string ): string =>
{
    return text.replace( /\p{Extended_Pictographic}[\p{Extended_Pictographic}\uFE0F\u200D]*/gu, "<span aria-hidden=\"true\">$&</span>" );
};
