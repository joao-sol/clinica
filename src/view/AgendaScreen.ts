import PromptSync from "prompt-sync";
import Router from "../control/Router";
import Agenda from "../model/Agenda";



export default class AgendaScreen {

    private prompt = PromptSync();
    private router!: Router;

    constructor(router: Router) {
        this.router = router;
    }

    public registerAgenda(): void {

        let agenda: Agenda = this.router.agendaController.getNewAgenda();
        
        let patientName = this.prompt("Digite o nome do paciente: ");
        agenda.patient.findByNamePatient(patientName);

        let doctorName = this.prompt("Digite o nome do Médico: ");
        agenda.doctor.findByNameDoctor(doctorName);

        let dateInput = this.prompt("Digite a data da consulta: ");
        let date = new Date(dateInput);
        agenda.setDate(date);
    }
}