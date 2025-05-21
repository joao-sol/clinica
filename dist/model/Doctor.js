"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const User_1 = __importDefault(require("./User"));
const DoctorStatus_1 = require("../types/DoctorStatus");
class Doctor extends User_1.default {
    constructor() {
        super();
        this.status = DoctorStatus_1.DoctorStatus.Available;
        this.active = true;
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
    getStatus() {
        return this.status;
    }
    setStatus(status) {
        this.status = status;
    }
    //Inicializa o médico com status 0 == Available.
    isAvailable() {
        return this.status === DoctorStatus_1.DoctorStatus.Available;
    }
    //sobrescrita de método
    getProfileInfo() {
        return `
        ID: ${this.id}\n
        Tipo: ${this.getType()}\n
        Nome: ${this.name}\n
        Idade: ${this.age}\n
        CPF: ${this.cpf}\n
        Especialidade: ${this.specialty}\n
        Ativo: ${this.isActive()}`;
    }
    //Método abstrato da classe abstrata User
    getType() {
        return "Médico";
    }
    //Métodos de interface
    setActive() {
        this.active = true;
    }
    setInactive() {
        this.active = false;
    }
    isActive() {
        return this.active;
    }
}
Doctor.counter = 0;
exports.default = Doctor;
