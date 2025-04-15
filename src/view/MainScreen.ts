import promptSync from "prompt-sync";
import Database from "../db/Database";
import MainController from "../controller/MainController";
import PatientRegister from "./PatientRegister";
import DoctorRegister from "./DoctorRegister";
import SchedulingRegister from "./SchedulingRegister";
export default class MainScreen{

    private prompt = promptSync();
    private control: MainController;
    private patientRegister: PatientRegister;
    private doctorRegister: DoctorRegister;
    private database: Database;
    private schedulingRegister: SchedulingRegister;
    
    constructor(control: MainController){

        this.control = control;
        this.patientRegister = new PatientRegister(control);
        this.doctorRegister = new DoctorRegister(control);
        this.database = new Database;
        this.schedulingRegister = new SchedulingRegister(control);
        this.mainMenu();
    }

    public mainMenu(): void{
        let continues: boolean = true;
        while (continues) {

        let choice = parseInt(this.prompt("Escolha:\n 1. Cadastrar Paciente\n 2. Cadastrar Médico\n 3. Cadastrar Agendamento\n 4. Listar pacientes\n 5. Listar médicos\n 6. Listar agendamentos\n 7. Sair\n"));
        switch (choice) {
            case 1:
                this.patientRegister.addPatient();
                break;
            case 2:
                this.doctorRegister.addDoctor();
                break;
            case 3:
                this.schedulingRegister.addScheduling();
                break;
            case 4:
                this.patientRegister.listPatients();
                break;
            case 5:
                this.doctorRegister.listDoctors();
                break;
            case 6:
                this.database.listAllSchedulings();
                break;
            case 7:
                continues = false;
        }
    }
    }
}