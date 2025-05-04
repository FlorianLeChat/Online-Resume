//
// Interface des propriétés pour les expériences professionnelles.
//
export interface ExperienceProperties
{
	// Nom de l'entreprise.
	company: string;

	// Nom du poste occupé.
	position: string;

	// Lieu de l'entreprise (ville, pays).
	location: string;

	// Lien vers l'entreprise (si disponible).
	link?: string;

	// Date de début de l'expérience au format ISO 8601 (YYYY-MM-DD).
	startDate: string;

	// Date de fin de l'expérience (si disponible) au format ISO 8601 (YYYY-MM-DD).
	endDate?: string;

	// Description de l'expérience.
	description: string | string[];
}