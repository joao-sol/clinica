export default abstract class User {
    
    protected name!: string;
    protected age!: number;
    protected cpf!: string;


    constructor() {

    }

    public getName(): string {
        return this.name;
    }

    public setName(name: string): void {
        this.name = name;
    }

    public getAge(): number {
        return this.age;
    }

    public setAge(age: number): void {
        this.age = age;
    }

    public getCpf(): string {
        return this.cpf;
    }

    public setCpf(cpf: string): void {
        this.cpf = cpf;
    }

    public getProfileInfo(): string {
        return `Nome: ${this.name}\n
        Idade: ${this.age}\n
        CPF: ${this.cpf}\n`
    }

    //Método abstrato tipo (Paciente/médico)
    public abstract getType(): string;

}

