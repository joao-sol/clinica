import Patient from "./Patient";
import Doctor from "./Doctor";

export default class Scheduling {
    private patient!: Patient;
    private doctor!: Doctor;
    private date!: Date;


    //injeção de dependência
    public doSchedule(patient: Patient, doctor: Doctor, date: Date) {
        this.patient = patient;
        this.doctor = doctor;
        this.date = date

    }

    public getDate(): Date {
        return this.date;
    }
    
    public setDate(date: Date) {
        this.date = date;
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