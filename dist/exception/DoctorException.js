"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class DoctorException extends Error {
    constructor(message = "O nome deve ter no mínimo 3 caracteres") {
        super(message);
        this.name = "InvalidNameError";
    }
    static validate(name) {
        if (!name || name.trim().length < 3) {
            throw new DoctorException();
        }
    }
}
exports.default = DoctorException;
