import Database from "../db/Database";
import Patient from "../model/Patient";

export default class PatientController {
    private db!: Database;

    constructor(db: Database) {
        this.db = db;
    }

    public getNewPatient(): Patient {
        return new Patient();
    }

    public registerNewPatient(patient: Patient): void {
        this.db.addNewPatient(patient);
    }
}