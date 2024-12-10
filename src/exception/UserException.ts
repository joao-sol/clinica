export default class UserException extends Error{
    
    constructor(message: string = "O nome deve ter no mínimo 3 caracteres"){
        super(message);
        this.name = "InvalidNameError";
    }

    static validate(): void {
        throw new UserException("Nome precisa ter no mínimo 3 caracteres!")
        }
}
