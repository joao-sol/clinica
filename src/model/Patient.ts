import User from "./User"
import Database from "../db/Database";

export default class Patient extends User{
    private agreement!: string;
    private allergy!: string;
    static findByName: any;

    public getAgreement(): string {
        return this.agreement;
    }
    public setAgreement(agreement: string): void {
        this.agreement = agreement;
    }

    public getAllergy(): string {
        return this.allergy;
    }
    public setAllergy(allergy: string): void {
        this.allergy = allergy;
    }

    public findByNamePatient(patientName: string): void {

    }
}