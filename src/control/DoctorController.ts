import Database from "../db/Database";
import Doctor from "../model/Doctor";

export default class DoctorController {
    private db!: Database;

    constructor(db: Database) {
        this.db = db;
    }

    public getNewDoctor(): Doctor {
        return new Doctor();
    }

    public registerNewDoctor(doctor: Doctor): void {
        this.db.addNewDoctor(doctor);
    }
}