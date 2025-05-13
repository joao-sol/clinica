import Doctor from "../model/Doctor";
import Patient from "../model/Patient";
import Scheduling from "../model/Scheduling";
import { DoctorStatus } from "../types/DoctorStatus";

describe("Agendamento de consulta", () => {
    test("deve definir o status do médico como ocupado após o agendamento", () => {
        const doctor = new Doctor();
        doctor.setName("João");
        doctor.setSpecialty("Cardiologista");
        
        const patient = new Patient();
        patient.setName("Maria");
        
        const schedulingDate = new Date(2025, 4, 20); // 20 de Maio de 2025

        const scheduling = new Scheduling();

        scheduling.doSchedule(patient, doctor, schedulingDate);
        doctor.setStatus(DoctorStatus.Busy);

        expect(doctor.getStatus()).toBe(DoctorStatus.Busy);
    });
});


