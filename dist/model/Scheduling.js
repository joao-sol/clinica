"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Scheduling {
    //injeção de dependência
    doSchedule(patient, doctor, date) {
        this.patient = patient;
        this.doctor = doctor;
        this.date = date;
    }
    getDate() {
        return this.date;
    }
    setDate(date) {
        this.date = date;
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
