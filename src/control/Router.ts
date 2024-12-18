import Database from "../db/Database";
import PrimaryScreen from "../view/PrimaryScreen";
import PatientController from "./PatientController";
import DoctorController from "./DoctorController";
import DoctorException from "../exception/UserException";
import AgendaController from "./AgendaController";

export default class Router{

    private db: Database = new Database();
    private ps: PrimaryScreen = new PrimaryScreen(this);
    public patientController: PatientController = new PatientController(this.db);
    public doctorController: DoctorController = new DoctorController(this.db); 
    public doctorException: DoctorException = new DoctorException();
    public agendaController: AgendaController = new AgendaController(this.db);

    constructor(){
        this.ps.getFirstScreen();
    }

}