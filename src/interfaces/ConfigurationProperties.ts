import type { SkillProperties } from "./SkillProperties";
import type { WebsiteProperties } from "./WebsiteProperties";
import type { EducationProperties } from "./EducationProperties";
import type { ExperienceProperties } from "./ExperienceProperties";
import type { TranslationProperties } from "./TranslationProperties";
import type { CertificationProperties } from "./CertificationProperties";

export interface ConfigurationProperties
{
    locale: string;
    name: string;
    job: string;
    email: string;
    phone: string;
    address: string;
    birthDate: string;
    languages?: string[];
    hasVehicle?: boolean;
    description: string;
    translations: TranslationProperties;
    websites?: WebsiteProperties[];
    skills?: SkillProperties[];
    certifications?: CertificationProperties[];
    experiences?: ExperienceProperties[];
    educations?: EducationProperties[];
    hobbies?: string[];
}
