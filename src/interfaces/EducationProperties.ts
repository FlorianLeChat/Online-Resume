//
// Interface des propriétés pour les formations académiques.
//
export interface EducationProperties
{
	// Nom de l'établissement.
	institution: string;

	// Nom du diplôme obtenu.
	degree: string;

	// Date de début de la formation au format ISO 8601 (YYYY-MM-DD).
	startDate: string;

	// Date de fin de la formation (si disponible) au format ISO 8601 (YYYY-MM-DD).
	endDate?: string;

	// État de la formation (en cours, terminée, etc.).
	statement: string;

	// Description de la formation.
	description: string;
}