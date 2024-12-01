import Doctor from "./Doctor";
import Patient from "./Patient";

export default abstract class Scheduling {
    private doctor!: Doctor;
    private patient!: Patient;

    constructor(doctor: Doctor, patient: Patient) {
        this.doctor = doctor;
        this.patient = patient;
    }

    abstract postpone(): void;
}

