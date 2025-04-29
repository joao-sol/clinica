"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const User_1 = __importDefault(require("./User"));
class Doctor extends User_1.default {
    constructor() {
        super();
        Doctor.counter++;
        this.id = Doctor.gerarId();
    }
    //Fazer sobrecarga de método com classe User.ts
    static gerarId() {
        return `DR-${String(this.counter)}`;
    }
    getSpecialty() {
        return this.specialty;
    }
    setSpecialty(specialty) {
        this.specialty = specialty;
    }
    getId() {
        return this.id;
    }
    //sobrescrita de método
    getProfileInfo() {
        return `
        ID: ${this.id}
        Paciente: ${this.name}
        Idade: ${this.age}
        CPF: ${this.cpf}
        Especialidade: ${this.specialty}`;
    }
}
Doctor.counter = 0;
exports.default = Doctor;
