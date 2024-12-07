"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
class AgendaScreen {
    constructor(router) {
        this.prompt = (0, prompt_sync_1.default)();
        this.router = router;
    }
    registerAgenda() {
        let agenda = this.router.agendaController.getNewAgenda();
        let patientName = this.prompt("Digite o nome do paciente: ");
        agenda.patient.findByName(patientName);
        let doctorName = this.prompt("Digite o nome do Médico: ");
        agenda.doctor.findByName(doctorName);
        let dateInput = this.prompt("Digite a data da consulta: ");
        let date = new Date(dateInput);
        agenda.setDate(date);
    }
}
exports.default = AgendaScreen;
