import User from "./User"

export default class Doctor extends User {


    private static counter: number = 0;
    private specialty!: string;
    private id: string;

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

