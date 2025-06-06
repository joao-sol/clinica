"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Database {
    constructor() {
        this.patientDb = [];
        this.doctorDb = [];
        this.scheduling = [];
    }
    addNewPatient(patient) {
        this.patientDb.push(patient);
        this.listAllPatients();
    }
    getPatient(index) {
        return this.patientDb[index];
    }
    addNewScheduling(scheduling) {
        this.scheduling.push(scheduling);
    }
    listAllSchedulings() {
        let s = "";
        for (let i = 0; i < this.scheduling.length; i++) {
            const element = this.scheduling[i];
            const date = element.getDate();
            const formattedDate = `${date.getDate().toString().padStart(2, '0')}/${(date.getMonth() + 1).toString().padStart(2, '0')}/${date.getFullYear()}`;
            s += "\nID: " + i;
            s += "\nPaciente: " + element.getPatient().getName();
            s += "\nConvênio: " + element.getPatient().getAgreement();
            s += "\nMédico: " + element.getDoctor().getName();
            s += "\nEspecialidade: " + element.getDoctor().getSpecialty();
            s += "\nData: " + formattedDate + "\n";
        }
        return s;
    }
    listAllPatients() {
        for (let index = 0; index < this.patientDb.length; index++) {
            const element = this.patientDb[index];
            console.log("\n" + element.getName() + "  " + element.getAge(), "  " + element.getCpf(), "  " + element.getBloodType(), "  " + element.getAgreement());
        }
    }
    addNewDoctor(doctor) {
        this.doctorDb.push(doctor);
        this.listAllDoctors();
    }
    getDoctor(index) {
        return this.doctorDb[index];
    }
    listAllDoctors() {
        for (let index = 0; index < this.doctorDb.length; index++) {
            const element = this.doctorDb[index];
            console.log("\n" + element.getName() + "  " + element.getAge(), "  " + element.getCpf(), "  " + element.getSpecialty());
        }
    }
}
exports.default = Database;
