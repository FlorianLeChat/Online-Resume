//
// Interface des propriétés pour la configuration du CV.
//
import type { SkillProperties } from "./SkillProperties";
import type { WebsiteProperties } from "./WebsiteProperties";
import type { EducationProperties } from "./EducationProperties";
import type { ExperienceProperties } from "./ExperienceProperties";
import type { TranslationProperties } from "./TranslationProperties";
import type { CertificationProperties } from "./CertificationProperties";

export interface ConfigurationProperties
{
	// Langue du CV.
	locale: string;

	// Nom et prénom de la personne.
	name: string;

	// Titre du poste recherché.
	job: string;

	// Adresse électronique de la personne.
	email: string;

	// Numéro de téléphone de la personne.
	phone: string;

	// Adresse postale de la personne.
	address: string;

	// Date de naissance de la personne au format ISO 8601 (YYYY-MM-DD).
	birthDate: string;

	// Langues parlées par la personne (si renseigné).
	languages?: string[];

	// Permet de savoir si la personne possède un véhicule et un permis de conduire.
	hasVehicle?: boolean;

	// Description de la personne.
	description: string;

	// Tableau des traductions pour les différentes sections du CV.
	translations: TranslationProperties;

	// Liste des sites Internet de la personne (si renseigné).
	websites?: WebsiteProperties[];

	// Liste des compétences de la personne (si renseigné).
	skills?: SkillProperties[];

	// Liste des certifications de la personne (si renseigné).
	certifications?: CertificationProperties[];

	// Liste des expériences professionnelles de la personne (si renseigné).
	experiences?: ExperienceProperties[];

	// Liste des formations de la personne (si renseigné).
	educations?: EducationProperties[];

	// Liste des loisirs de la personne (si renseigné).
	hobbies?: string[];
}