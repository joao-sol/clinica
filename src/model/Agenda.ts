import Scheduling from "./Scheduling";
import Doctor from "./Doctor";
import Patient from "./Patient";
//reunir as classes doctor e patient e horário

export default class Agenda extends Scheduling{
    patient!: Patient;
    doctor!: Doctor;

    constructor(doctor: Doctor, patient: Patient, date: Date) {
        super(doctor, patient, date)
    }

    
    public getDate(): Date {
        return this.date;
    }

    public setDate(date: Date): void {
        this.date = date;
    }
    
    postpone(
        patientName: String,
        doctorName: String,
        date: Date
    ): void {    
        
    }

}