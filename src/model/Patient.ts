import User from "./User"

export default class Patient extends User{
    private agreement!: string;
    private allergy!: string;

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
}