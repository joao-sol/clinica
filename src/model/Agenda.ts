import Scheduling from "./Scheduling";
import Doctor from "./Doctor";
import Patient from "./Patient";
//reunir as classes doctor e patient e horário

export default class Agenda extends Scheduling{
    public date!: Date;
    patient: any;
    doctor: any;

    public getDate(): Date {
        return this.date;
    }

    public setDate(date: Date): void {
        this.date = date;
    }


    constructor(doctor: Doctor, patient: Patient, date: Date) {
        super(doctor, patient)
        this.date = this.date;
    }
    postpone(): void {
        //`O paciente: ${this.patient.getName()}, tem uma consulta com o médico ${this.doctor.getName()} na data ${this.date}`
        
    }

}