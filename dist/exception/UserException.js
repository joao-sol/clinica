"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class UserException extends Error {
    constructor(message = "O nome deve ter no mínimo 3 caracteres") {
        super(message);
        this.name = "InvalidNameError";
    }
    static validate() {
        throw new UserException("Nome precisa ter no mínimo 3 caracteres!");
    }
}
exports.default = UserException;
