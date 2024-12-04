import PromptSync from "prompt-sync";
import Router from "../control/Router";
import Agenda from "../model/Agenda";
import Patient from "../model/Patient";

export default class AgendaScreen {

    private prompt = PromptSync();
    private router!: Router;

    constructor(router: Router) {
        this.router = router;
    }

    public registerAgenda(): void {

        let agenda: Agenda = this.router.agendaController.getNewAgenda();

        let patientName = this.prompt("Digite a id do paciente ");
        agenda.getName(patientName)
    }
}