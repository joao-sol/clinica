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
        const schedulingDate = new Date(year, month - 1, day);
        const patient = this.control.db.patientDb.find(p => p.getId() === patientId);
        const doctor = this.control.db.doctorDb.find(d => d.getId() === doctorId);
        if (doctor.getStatus() === DoctorStatus_1.DoctorStatus.Busy) {
            console.log("❌ Médico ocupado. Escolha outro.");
            return;
        }
        //this.control.db.scheduling.push(scheduling);
        scheduling.doSchedule(patient, doctor, schedulingDate);
        //Atualiza status do médico para 1 == ocupado.
        doctor.setStatus(DoctorStatus_1.DoctorStatus.Busy);
        this.control.db.addNewScheduling(scheduling);
        console.log("✅ Agendamento realizado com sucesso!");
    }
}
exports.default = SchedulingRegister;
