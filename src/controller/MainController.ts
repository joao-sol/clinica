import Database from "../db/Database";
import Patient from "../model/Patient";
import Doctor from "../model/Doctor";
import MainScreen from "../view/MainScreen";
import Scheduling from "../model/Scheduling";
export default class MainController {

    public db: Database = new Database();

    constructor() {
        new MainScreen(this);
        
    }

    public getNewPatient(): Patient{
        return new Patient();
    }

    public getNewDoctor(): Doctor{
        return new Doctor();
    }

    public getNewScheduling(): Scheduling{
        return new Scheduling();
    }
}