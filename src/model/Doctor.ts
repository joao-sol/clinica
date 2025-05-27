import User from "./User"
import Activatable from "../interfaces/Activable";
import { DoctorStatus } from "../types/DoctorStatus";

export default class Doctor extends User {


    private static counter: number = 0;
    private specialty!: string;
    private id: string;
    private status: DoctorStatus = DoctorStatus.Available;
    private active: boolean = true;

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
        ID: ${this.id}\n
        Tipo: ${this.getType()}\n
        Nome: ${this.name}\n
        Idade: ${this.age}\n
        CPF: ${this.cpf}\n
        Especialidade: ${this.specialty}\n
        Ativo: ${this.isActive()}`
    }

    //Método abstrato da classe abstrata User
    public getType(): string {
        return "Médico";
    }

    //Métodos de interface
    public setActive(): void {
        this.active = true;
    }

    public setInactive(): void {
        this.active = false;
    }

    public isActive(): boolean {
        return this.active;
    }

}

