import config from "../data/default.json";
import { enGB, fr } from "date-fns/locale";
import { intervalToDuration, formatDuration } from "date-fns";

//
// Mise en forme des dates en fonction d'une langue donnée.
//
export const formatDate = ( date: string ) =>
{
	return new Intl.DateTimeFormat( config.locale, {
		year: "numeric",
		month: "long"
	} ).format( new Date( date ) );
};

//
// Calcul de la durée entre deux dates au format ISO 8601 (YYYY-MM-DD).
//
export const calculateDuration = ( start: string, end?: string ): string =>
{
	const endDate = end ? new Date( end ) : new Date();
	endDate.setDate( endDate.getDate() + 1 ); // Pour éviter les décalages d'un jour.

	const duration = intervalToDuration( {
		start: new Date( start ),
		end: endDate
	} );

	return formatDuration( duration, {
		locale: config.locale === "fr" ? fr : enGB, // Je ne peux pas faire mieux pour l'instant...
		format: [ "years", "months", "days" ],
		delimiter: ", "
	} );
};