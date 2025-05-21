"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Doctor_1 = __importDefault(require("../model/Doctor"));
const Patient_1 = __importDefault(require("../model/Patient"));
const Scheduling_1 = __importDefault(require("../model/Scheduling"));
const DoctorStatus_1 = require("../types/DoctorStatus");
describe("Agendamento de consulta", () => {
    test("deve definir o status do médico como ocupado após o agendamento", () => {
        const doctor = new Doctor_1.default();
        doctor.setName("João");
        doctor.setSpecialty("Cardiologista");
        const patient = new Patient_1.default();
        patient.setName("Maria");
        const schedulingDate = new Date(2025, 4, 20); // 20 de Maio de 2025
        const scheduling = new Scheduling_1.default();
        scheduling.doSchedule(patient, doctor, schedulingDate);
        doctor.setStatus(DoctorStatus_1.DoctorStatus.Busy);
        expect(doctor.getStatus()).toBe(DoctorStatus_1.DoctorStatus.Busy);
    });
});
