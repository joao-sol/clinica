"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
class PatientRegister {
    constructor(control) {
        this.prompt = (0, prompt_sync_1.default)();
        this.control = control;
    }
    addPatient() {
        let patient = this.control.getNewPatient();
        let name = this.prompt("\nDigite o nome do paciente\n");
        let age = parseInt(this.prompt("\nDigite a idade do paciente"));
        let cpf = this.prompt("\nDigite o CPF do paciente");
        let bloodType = this.prompt("\nDigite o tipo sanguíneo do paciente");
        let agreement = this.prompt("\nDigite o convênio do paciente (se houver)");
        patient.setName(name);
        patient.setAge(age);
        patient.setCpf(cpf);
        patient.setBloodType(bloodType);
        patient.setAgreement(agreement);
        this.control.db.patientDb.push(patient);
        console.log("Dados do paciente cadastrado: \n--------------------------------------");
        console.log("ID: " + patient.getId());
        console.log("Idade: " + age);
        console.log("CPF: " + cpf);
        console.log("Tipo sanguíneo: " + bloodType);
        console.log("Convênio: " + agreement);
        console.log("--------------------------------------");
    }
    listPatients() {
        const patient = this.control.db.patientDb;
        if (patient.length === 0) {
            console.log("\nNenhum médico cadastrado.");
            return;
        }
        console.log("\n📋 Lista de pacientes cadastrados:\n");
        patient.forEach((doc, index) => {
            console.log(`Paciente ${index + 1}`);
            console.log(`ID: ${doc.getId()}`);
            console.log(`Nome: ${doc.getName()}`);
            console.log(`Idade: ${doc.getAge()}`);
            console.log(`CPF: ${doc.getCpf()}`);
            console.log(`Tipo sanguíneo: ${doc.getBloodType()}`);
            console.log(`Convênio: ${doc.getAgreement()}`);
            console.log("-------------------------");
        });
    }
}
exports.default = PatientRegister;
