"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const DoctorStatus_1 = require("../types/DoctorStatus");
class SchedulingRegister {
    constructor(control) {
        this.prompt = (0, prompt_sync_1.default)();
        this.control = control;
    }
    addScheduling() {
        try {
            let scheduling = this.control.getNewScheduling();
            //buscar em db tanto paciente quanto médico que não são strings, mas doctor e patient
            //precisa passar os objetos
            let patientId = this.prompt("\nDigite a id do paciente\n");
            let doctorId = this.prompt("\nDigite a id do médico\n");
            //Recebe data como string
            let dateInput = this.prompt("\nDigite a data do agendamento (formato: DD/MM/AAAA)\n");
            //Converte a string de data para tipo date
            //Split divide a string em partes, map converte para números e new date cria a data a partir das saídas disso
            //Mês em Typescript começa em 0 (zero-based)
            const [day, month, year] = dateInput.split("/").map(Number);
            if (!day || !month || !year) {
                throw new Error("Data inválida. Use o formato DD/MM/AAAA.");
            }
            const schedulingDate = new Date(year, month - 1, day);
            const patient = this.control.db.patientDb.find(p => p.getId() === patientId);
            const doctor = this.control.db.doctorDb.find(d => d.getId() === doctorId);
            if (!patient) {
                throw new Error("Paciente não encontrado!");
            }
            if (!doctor) {
                throw new Error("Médico não encontrado!");
            }
            if (doctor.getStatus() === DoctorStatus_1.DoctorStatus.Busy) {
                console.log("Médico ocupado, escolha outro!");
                return;
            }
            //this.control.db.scheduling.push(scheduling);
            scheduling.doSchedule(patient, doctor, schedulingDate);
            //Atualiza status do médico para 1 == ocupado.
            doctor.setStatus(DoctorStatus_1.DoctorStatus.Busy);
            this.control.db.addNewScheduling(scheduling);
            console.log("✅ Agendamento realizado com sucesso!");
        }
        catch (error) {
            console.log("Erro ao agendar consulta: " + error.message);
        }
    }
}
exports.default = SchedulingRegister;
