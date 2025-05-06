import User from "./User"
import { DoctorStatus } from "../types/DoctorStatus";

export default class Doctor extends User {


    private static counter: number = 0;
    private specialty!: string;
    private id: string;
    private status: DoctorStatus = DoctorStatus.Available;

    constructor() {
        super();
        Doctor.counter++;
        this.id = Doctor.gerarId();
    }

    //Fazer sobrecarga de método com classe User.ts
    private static gerarId(): string {
        return `DR-${String(this.counter)}`;
    }
    public getSpecialty(): string {
        return this.specialty;
    }

    public setSpecialty(specialty: string): void {
        this.specialty = specialty;
    }

    public getId(): string {
        return this.id;
    }

    public getStatus(): DoctorStatus {
        return this.status;
    }

    public setStatus(status: DoctorStatus): void {
        this.status = status;
    }

    //Inicializa o médico com status 0 == Available.
    public isAvailable(): boolean {
        return this.status === DoctorStatus.Available;
    }

    //sobrescrita de método
    public override getProfileInfo(): string {
        return `
        ID: ${this.id}
        Paciente: ${this.name}
        Idade: ${this.age}
        CPF: ${this.cpf}
        Especialidade: ${this.specialty}`
    }

}

