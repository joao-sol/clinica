import Database from "../db/Database";
import Agenda from "../model/Agenda";
import Doctor from "../model/Doctor";
import Patient from "../model/Patient";

export default class AgendaController {
    private db!: Database;
    private 

    constructor(db: Database) {
        this.db = db;
    }

    getNewAgenda(): Agenda {
        return new Agenda();
    }

    public registerNewAgenda(agenda: Agenda): void {
        this.db.addNewAgenda(agenda);
    }
}