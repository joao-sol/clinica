import User from "./User"

export default class Doctor extends User {
    private specialty!: string;


    public getSpecialty(): string {
        return this.specialty;
    }

    public setSpecialty(specialty: string): void {
        this.specialty = specialty;
    }
}