"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
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
        const patient = this.control.db.patientDb.find(p => p.getId() === patientId);
        const doctor = this.control.db.doctorDb.find(d => d.getId() === doctorId);
        //this.control.db.scheduling.push(scheduling);
        scheduling.doSchedule(patient, doctor);
        this.control.db.addNewScheduling(scheduling);
        console.log("✅ Agendamento realizado com sucesso!");
    }
}
exports.default = SchedulingRegister;
