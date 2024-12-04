"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class UserException extends Error {
    constructor(message = "O nome deve ter no mínimo 3 caracteres") {
        super(message);
        this.name = "InvalidNameError";
    }
    static validate(name) {
        if (!name || name.length < 3) {
            throw new UserException();
        }
    }
}
exports.default = UserException;
