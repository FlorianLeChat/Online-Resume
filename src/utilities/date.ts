import config from "../data/default.json";
import { enGB, fr } from "date-fns/locale";
import { intervalToDuration, formatDuration } from "date-fns";

export const formatDate = ( date: string ) =>
{
	return new Intl.DateTimeFormat( config.locale, {
		year: "numeric",
		month: "long"
	} ).format( new Date( date ) );
};

export const calculateDuration = ( start: string, end?: string ): string =>
{
	const endDate = end ? new Date( end ) : new Date();
	endDate.setDate( endDate.getDate() + 1 ); // We want to include the current day in the duration, so we add one day to the end date.

	const duration = intervalToDuration( {
		start: new Date( start ),
		end: endDate
	} );

	return formatDuration( duration, {
		locale: config.locale === "fr" ? fr : enGB, // I can't do better than this, sorry.
		format: [ "years", "months", "days" ],
		delimiter: ", "
	} );
};