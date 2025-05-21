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
        console.log(doctor.getProfileInfo());
        console.log("--------------------------------------");
        this.control.db.doctorDb.push(doctor);
    }
    listDoctors() {
        const doctors = this.control.db.doctorDb;
        if (doctors.length === 0) {
            console.log("\nNenhum médico cadastrado.");
            return;
        }
        console.log("\nLista de Médicos Cadastrados:\n");
        doctors.forEach((doc, index) => {
            console.log(`Médico ${index + 1}`);
            console.log(doc.getProfileInfo());
            console.log("-------------------------");
        });
    }
    toggleDoctorActivation() {
        const doctorId = this.prompt("\nDigite a ID do médico: ");
        const doctor = this.control.db.doctorDb.find(d => d.getId() === doctorId);
        if (!doctor) {
            console.log("Médico não encontrado.");
            return;
        }
        if (doctor.isActive()) {
            const confirm = this.prompt("Médico está ATIVO. Deseja inativá-lo? (s/n): ");
            if (confirm.toLowerCase() === "s") {
                doctor.setInactive();
                console.log("Médico inativado com sucesso.");
            }
        }
        else {
            const confirm = this.prompt("Médico está INATIVO. Deseja ativá-lo? (s/n): ");
            if (confirm.toLowerCase() === "s") {
                doctor.setActive();
                console.log("Médico ativado com sucesso.");
            }
        }
    }
}
exports.default = DoctorRegister;
