"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Scheduling {
    doSchedule(patient, doctor) {
        this.patient = patient;
        this.doctor = doctor;
    }
    getPatient() {
        return this.patient;
    }
    setPatient(patient) {
        this.patient = patient;
    }
    getDoctor() {
        return this.doctor;
    }
    setDoctor(doctor) {
        this.doctor = doctor;
    }
}
exports.default = Scheduling;
