"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
class DoctorScreen {
    constructor(router) {
        this.prompt = (0, prompt_sync_1.default)();
        this.router = router;
    }
    // este método requisita as informações para o cadastro dos médicos
    registerDoctor() {
        //para registrar um novo médico será solicitado
        //todos os dados de "Patient.ts" e "Doctor.ts"
        let doctor = this.router.doctorController.getNewDoctor();
        // nome
        let doctorName = this.prompt("Digite o nome do médico ");
        doctor.setName(doctorName);
        //peço o gênero
        let doctorGender = this.prompt("Digite o gênero do médico ");
        doctor.setGender(doctorGender);
        // Peço idade
        let doctorAge = this.prompt("Digite a idade do médico ");
        doctor.setAge(doctorAge);
        let doctorSpecialty = this.prompt("Digite a especialidade do médico ");
        doctor.setSpecialty(doctorSpecialty);
        // chama o DoctorController para gravar no banco
        this.router.doctorController.registerNewDoctor(doctor);
    }
}
exports.default = DoctorScreen;
