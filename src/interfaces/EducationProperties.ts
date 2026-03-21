export interface EducationProperties
{
    institution: string;
    degree: string;
    location: string;
    startDate: string;
    endDate?: string;
    statement?: string;
    description: string | string[];
}
