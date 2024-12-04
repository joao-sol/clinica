export default class UserException extends Error{
    
    constructor(message: string = "O nome deve ter no mínimo 3 caracteres"){
        super(message);
        this.name = "InvalidNameError";
    }

    static validate(name: string): void {
        if (!name || name.length < 3) {
            throw new UserException();
        }
    }
}