"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
class DoctorRegister {
    constructor(control) {
        this.prompt = (0, prompt_sync_1.default)();
        this.control = control;
    }
    addDoctor() {
        let doctor = this.control.getNewDoctor();
        let name = this.prompt("\nDigite o nome do médico");
        let age = parseInt(this.prompt("\nDigite a idade do médico"));
        let cpf = this.prompt("\nDigite o cpf do médico");
        let specialty = this.prompt("\nDigite a especialidade do médico");
        doctor.setName(name);
        doctor.setAge(age);
        doctor.setCpf(cpf);
        doctor.setSpecialty(specialty);
        console.log("Dados do médico cadastrado: \n--------------------------------------");
        console.log("ID: " + doctor.getId());
        console.log("Nome: " + name);
        console.log("Idade: " + age);
        console.log("CPF: " + cpf);
        console.log("Especialidade: " + specialty);
        console.log("--------------------------------------");
        this.control.db.doctorDb.push(doctor);
    }
    listDoctors() {
        const doctors = this.control.db.doctorDb;
        if (doctors.length === 0) {
            console.log("\nNenhum médico cadastrado.");
            return;
        }
        console.log("\n📋 Lista de Médicos Cadastrados:\n");
        doctors.forEach((doc, index) => {
            console.log(`Médico ${index + 1}`);
            console.log(`ID: ${doc.getId()}`);
            console.log(`Nome: ${doc.getName()}`);
            console.log(`Idade: ${doc.getAge()}`);
            console.log(`CPF: ${doc.getCpf()}`);
            console.log(`Especialidade: ${doc.getSpecialty()}`);
            console.log("-------------------------");
        });
    }
}
exports.default = DoctorRegister;
