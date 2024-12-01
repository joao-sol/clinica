"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const PatientScreen_1 = __importDefault(require("./PatientScreen"));
const DoctorScreen_1 = __importDefault(require("./DoctorScreen"));
class PrimaryScreen {
    constructor(router) {
        this.prompt = (0, prompt_sync_1.default)();
        this.router = router;
        this.patientScreen = new PatientScreen_1.default(this.router);
        this.doctorScreen = new DoctorScreen_1.default(this.router);
    }
    getFirstScreen() {
        let showScreen = true;
        while (showScreen) {
            let choice = this.prompt("Escolha:\n1 - Cadastrar \n2 - Listar\n3 - Atualizar\n4 - Apagar\n5 - Sair ");
            switch (choice) {
                case "1":
                    let choice2 = this.prompt("Escolha:\n1 - Cadastrar Paciente \n2 Cadastrar Médico");
                    switch (choice2) {
                        case "1":
                            // Chamada da tela de cadastro de paciente
                            this.patientScreen.registerPatient();
                            break;
                        case "2":
                            // Chamada da tela de cadastro de médicos
                            this.doctorScreen.registerDoctor();
                    }
                    break;
                case "2":
                    console.log("Digitou 2");
                    break;
                case "3":
                    console.log("digitou 3");
                    break;
                case "4":
                    console.log("digitou 4");
                    break;
                case "5":
                    showScreen = false;
                    break;
                default:
                    console.log("Invalid answer!");
            }
        }
    }
}
exports.default = PrimaryScreen;
