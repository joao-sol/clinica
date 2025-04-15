import Patient from "./Patient";
import Doctor from "./Doctor";

export default class Scheduling {
    private patient!: Patient;
    private doctor!: Doctor;

    public doSchedule(patient: Patient, doctor: Doctor) {
        this.patient = patient;
        this.doctor = doctor

    }

    public getPatient(): Patient {
        return this.patient;
    }

    public setPatient(patient: Patient){
        this.patient = patient;
    }

    public getDoctor(): Doctor {
        return this.doctor;
    }

    public setDoctor(doctor: Doctor){
        this.doctor = doctor;
    }
}