"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Patient_1 = __importDefault(require("../model/Patient"));
const Doctor_1 = __importDefault(require("../model/Doctor"));
class Database {
    constructor() {
        this.patients = [];
        this.doctors = [];
    }
    addNewPatient(patient) {
        this.patients.push(patient);
        console.log(this.patients);
    }
    addNewDoctor(doctor) {
        this.doctors.push(doctor);
        console.log(this.doctors);
    }
    getPatientByIndex(index) {
        return this.patients[index];
    }
    getPatientByName(name) {
        for (let i = 0; i < this.patients.length; i++) {
            if (this.patients[i].getName() == name) {
                return this.patients[i];
            }
        }
        console.log("DEU RUIM");
        return new Patient_1.default();
    }
    getDoctorByIndex(index) {
        return this.doctors[index];
    }
    getDoctorByName(name) {
        for (let i = 0; i < this.doctors.length; i++) {
            if (this.doctors[i].getName() == name) {
                return this.doctors[i];
            }
        }
        console.log("DEU RUIM");
        return new Doctor_1.default();
    }
}
exports.default = Database;