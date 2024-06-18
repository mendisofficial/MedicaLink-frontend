import { Hospital } from "./Hospital";
import { Patient } from "./Patient";
import { VaccineBrand } from "./VaccineBrand";

export interface Vaccination{
    id: number;

    patientId: number;

    hospitalId: number;

    vaccineBrandId: number;

    dateOfVaccination: Date;

    dose: string;

    patient?: Patient;

    hospital?: Hospital;

    vaccineBrand?: VaccineBrand
}