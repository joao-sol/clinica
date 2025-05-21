"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const User_1 = __importDefault(require("./User"));
class Patient extends User_1.default {
    //Sobrecarga de método:
    static gerarId(type) {
        if (type === 'string') {
            return `PT-${String(this.counter)}`;
        }
        else {
            return `PT-${String(this.counter)}`;
        }
    }
    constructor() {
        super();
        this.active = true;
        Patient.counter++;
        this.id = Patient.gerarId('string');
        this.id = Patient.gerarId('number');
    }
    getId() {
        return this.id;
    }
    getBloodType() {
        return this.bloodType;
    }
    setBloodType(bloodType) {
        this.bloodType = bloodType;
    }
    getAgreement() {
        return this.agreement;
    }
    setAgreement(agreement) {
        this.agreement = agreement;
    }
    //sobrescrita de método
    getProfileInfo() {
        return `
        ID: ${this.id}\n
        Tipo usuário: ${this.getType()}\n
        Nome: ${this.name}\n
        Idade: ${this.age}\n
        CPF: ${this.cpf}\n
        Tipo sanguíneo: ${this.bloodType}\n
        Convênio: ${this.agreement}\n
        Ativo: ${this.isActive()}`;
    }
    //Método abstrato da classe abstrata User
    getType() {
        return "Paciente";
    }
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
Patient.counter = 0;
exports.default = Patient;
