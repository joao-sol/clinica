import UserException from "../exception/UserException";

export default class User{
    public name!: string;
    private gender!: string;
    private age!: string;

    public getName(): string {
        return this.name;
    }
    public setName(name: string): void {
        if ( !name || name.length < 3) {
          throw new UserException  
        } else {
        this.name = name; }
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