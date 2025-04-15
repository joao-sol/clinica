"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const Database_1 = __importDefault(require("../db/Database"));
const PatientRegister_1 = __importDefault(require("./PatientRegister"));
const DoctorRegister_1 = __importDefault(require("./DoctorRegister"));
const SchedulingRegister_1 = __importDefault(require("./SchedulingRegister"));
class MainScreen {
    constructor(control) {
        this.prompt = (0, prompt_sync_1.default)();
        this.control = control;
        this.patientRegister = new PatientRegister_1.default(control);
        this.doctorRegister = new DoctorRegister_1.default(control);
        this.database = new Database_1.default;
        this.schedulingRegister = new SchedulingRegister_1.default(control);
        this.mainMenu();
    }
    mainMenu() {
        let continues = true;
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
exports.default = MainScreen;
