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
        let list;
        patient.setName(name);
        patient.setAge(age);
        patient.setCpf(cpf);
        patient.setBloodType(bloodType);
        patient.setAgreement(agreement);
        patient.getProfileInfo();
        this.control.db.patientDb.push(patient);
        console.log("Dados do paciente cadastrado: \n--------------------------------------");
        console.log(patient.getProfileInfo());
        console.log("--------------------------------------");
    }
    listPatients() {
        const patient = this.control.db.patientDb;
        if (patient.length === 0) {
            console.log("\nNenhum paciente cadastrado.");
            return;
        }
        console.log("\nLista de pacientes cadastrados:\n");
        patient.forEach((pat, index) => {
            console.log(pat.getProfileInfo());
            console.log("-------------------------");
        });
    }
    togglePatientActivation() {
        const patientId = this.prompt("\nDigite a ID do paciente: ");
        const patient = this.control.db.patientDb.find(d => d.getId() === patientId);
        if (!patient) {
            console.log("Paciente não encontrado.");
            return;
        }
        if (patient.isActive()) {
            const confirm = this.prompt("Paciente está ATIVO. Deseja inativá-lo? (s/n): ");
            if (confirm.toLowerCase() === "s") {
                patient.setInactive();
                console.log("Paciente inativado com sucesso.");
            }
        }
        else {
            const confirm = this.prompt("Paciente está INATIVO. Deseja ativá-lo? (s/n): ");
            if (confirm.toLowerCase() === "s") {
                patient.setActive();
                console.log("Paciente ativado com sucesso.");
            }
        }
    }
}
exports.default = PatientRegister;
