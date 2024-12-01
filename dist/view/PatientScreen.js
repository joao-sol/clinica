"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
class PatientScreen {
    constructor(router) {
        this.prompt = (0, prompt_sync_1.default)();
        this.router = router;
    }
    // este método resuisita as informações para o cadastro dos pacientes
    registerPatient() {
        //para registrar um novo paciente será solicitado
        //todos os dados de "Patient.ts"
        let patient = this.router.patientController.getNewPatient();
        // nome
        let patientName = this.prompt("Digite o nome do paciente ");
        patient.setName(patientName);
        //peço o gênero
        let patientGender = this.prompt("Digite o gênero do paciente ");
        patient.setGender(patientGender);
        // Peço idade
        let patientAge = this.prompt("Digite a idade do paciente ");
        patient.setAge(patientAge);
        // Peço o convênio
        let patientAgreement = this.prompt("Digite o convênio do paciente ");
        patient.setAgreement(patientAgreement);
        let patientAllergy = this.prompt("O paciente tem alguma alergia? Se sim digite qual ");
        patient.setAllergy(patientAllergy);
        // chama o PatientController para gravar no banco
        this.router.patientController.registerNewPatient(patient);
    }
}
exports.default = PatientScreen;
