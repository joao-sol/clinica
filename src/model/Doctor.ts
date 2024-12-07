import User from "./User"
import Database from "../db/Database";

export default class Doctor extends User {
    private specialty!: string;


    public getSpecialty(): string {
        return this.specialty;
    }

    public setSpecialty(specialty: string): void {
        this.specialty = specialty;
    }

    public findByNameDoctor(doctorName: string): void{

    }
}