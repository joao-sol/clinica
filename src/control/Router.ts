import Database from "../db/Database";
import PrimaryScreen from "../view/PrimaryScreen";
import PatientController from "./PatientController";
import DoctorController from "./DoctorController";

export default class Router{

    private db: Database = new Database();
    private ps: PrimaryScreen = new PrimaryScreen(this);
    public patientController: PatientController = new PatientController(this.db);
    public doctorController: DoctorController = new DoctorController(this.db); 

    constructor(){
        this.ps.getFirstScreen();
    }

}