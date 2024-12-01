export default class Patient{
    private name!: string;
    private gender!: string;
    private age!: string;

    public getName(): string {
        return this.name;
    }
    public setName(name: string): void {
        this.name = name;
    }
    
    public getGender(): string {
        return this.gender;
    }
    public setGender(gender: string): void {
        this.gender = gender;
    }

    public setAge(age: string): void {
        this.age = age;
    }
}