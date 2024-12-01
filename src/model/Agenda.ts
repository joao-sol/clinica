import Scheduling from "./Scheduling";
import Doctor from "./Doctor";
import Patient from "./Patient";
import Database from "../db/Database";

export default class Agenda extends Scheduling{
    public date!: Date;

    constructor(doctor: Doctor, patient: Patient, date: Date) {
        super(doctor, patient)
        this.date = this.date
    }
    postpone(): void {
        
    }

}