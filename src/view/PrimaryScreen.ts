import promptSync from "prompt-sync";
import PatientScreen from "./PatientScreen";
import Router from "../control/Router";
import DoctorScreen from "./DoctorScreen";
import AgendaScreen from "./AgendaScreen";

export default class PrimaryScreen {
    private prompt = promptSync();
    private patientScreen!: PatientScreen;
    private router!: Router;
    private doctorScreen!: DoctorScreen;
    private agendaScreen!: AgendaScreen;

    constructor(router: Router) {
        this.router = router;
        this.patientScreen = new PatientScreen(this.router);
        this.doctorScreen = new DoctorScreen(this.router);
        this.agendaScreen = new AgendaScreen(this.router);
    }

    public getFirstScreen(): void {
        let showScreen: boolean = true;
        while (showScreen) {

            let choice = this.prompt(
                "Escolha:\n1 - Cadastrar \n2 - Listar\n3 - Atualizar\n4 - Apagar\n5 - Sair "
            );

            switch (choice) {
                case "1":
                    let choice2 = this.prompt("Escolha:\n1 - Cadastrar Paciente \n2 Cadastrar Médico \n3 Cadastrar Consulta")
                    switch (choice2) {
                        case "1":
                          // Chamada da tela de cadastro de paciente
                          this.patientScreen.registerPatient();
                          break;
                        
                        case "2":
                            // Chamada da tela de cadastro de médicos
                            this.doctorScreen.registerDoctor();
                          break;
                        
                        case "3":
                            //Chamada da tela de cadastro de consultas
                            this.agendaScreen.registerAgenda();
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