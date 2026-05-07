import type { Skill } from "./skill";
import type { Website } from "./website";
import type { Education } from "./education";
import type { Experience } from "./experience";
import type { Translation } from "./translation";
import type { Certification } from "./certification";

export interface Configuration {
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
    translations: Translation;
    websites?: Website[];
    skills?: Skill[];
    certifications?: Certification[];
    experiences?: Experience[];
    educations?: Education[];
    hobbies?: string[];
}
