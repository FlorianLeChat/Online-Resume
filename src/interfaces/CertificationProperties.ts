//
// Interface des propriétés pour les certifications numériques.
//
export interface CertificationProperties
{
	// Nom de la certification.
	name: string;

	// Nom de l'organisme émetteur de la certification.
	issuer: string;

	// Date d'obtention de la certification au format ISO 8601 (YYYY-MM-DD).
	date: string;

	// Lien vers la certification (si disponible).
	link?: string;
}