import { Admin } from "./Admin";
import { MedicalRecord } from "./MedicalRecord";
import { Vaccination } from "./Vaccination";

export interface Patient {
    id: number;

    name: string;

    bloodGroup: string;

    height: number;

    weight: number;

    dateOfBirth: Date;

    address: string;

    gender: string;

    contactNumber: string;

    profileImage: string;

    registeredDate: Date;

    registeredBy: number;

    admin: Admin;

    vaccinations: Vaccination[];

    medicalRecords: MedicalRecord[];
}