import config from "../data/default.json";

//
// Mise en forme des dates en fonction d'une langue donnée0.
//
export const formatDate = ( date: string ) =>
{
	return new Intl.DateTimeFormat( config.locale, {
		year: "numeric",
		month: "long"
	} ).format( new Date( date ) );
};