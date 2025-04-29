import User from "./User";

export default class Patient extends User {

    private static counter: number = 0;
    private bloodType!: string;
    private agreement!: string;
    private id: any;

    private static gerarId(type: 'string'): string;
    private static gerarId(type: 'number'): number;

    //Sobrecarga de método:
    private static gerarId(type: 'string' | 'number'): string | number {
        if (type === 'string') {
            return `PT-${String(this.counter)}`;
        }
        else {
            return `PT-${String(this.counter)}`;
        }
        
    }

    constructor() {
        super();
        Patient.counter++;
        this.id = Patient.gerarId('string') as string;
        this.id = Patient.gerarId('number') as number;
    }

    public getId(): string {
        return this.id;
    }

    public getBloodType(): string {
        return this.bloodType;
    }

    public setBloodType(bloodType: string): void {
        this.bloodType = bloodType;
    }

    public getAgreement(): string {
        return this.agreement;
    }

    public setAgreement(agreement: string): void {
        this.agreement = agreement;
    }

    //sobrescrita de método
    public override getProfileInfo(): string {
        return `ID: ${this.id}\n 
        Paciente: ${this.name}\n
        Idade: ${this.age}\n
        CPF: ${this.cpf}\n
        Tipo sanguíneo: ${this.bloodType}\n
        Convênio: ${this.agreement}\n`
    }
}