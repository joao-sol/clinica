import Scheduling from "../model/Scheduling";
import PromptSync from "prompt-sync";
import MainController from "../controller/MainController";
import Patient from "../model/Patient";
import Doctor from "../model/Doctor";

export default class SchedulingRegister {

    private prompt = PromptSync();
    private control: MainController;

    public constructor(control: MainController) {
        this.control = control;
    }

    public addScheduling() {
        let scheduling: Scheduling = this.control.getNewScheduling();

        //buscar em db tanto paciente quanto médico que não são strings, mas doctor e patient
        //precisa passar os objetos
        let patientId: string = this.prompt("\nDigite a id do paciente\n");
        let doctorId: string = this.prompt("\nDigite a id do médico\n");

        const patient = this.control.db.patientDb.find(p => p.getId() === patientId);
        const doctor = this.control.db.doctorDb.find(d => d.getId() === doctorId);

        //this.control.db.scheduling.push(scheduling);

        scheduling.doSchedule(patient!, doctor!);

        this.control.db.addNewScheduling(scheduling);
        console.log("✅ Agendamento realizado com sucesso!");

    }




}