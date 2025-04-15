import Scheduling from "../model/Scheduling";
import PromptSync from "prompt-sync";
import MainController from "../controller/MainController";

export default class SchedulingRegister {

    private prompt = PromptSync();
    private control: MainController;

    public constructor(control: MainController) {
        this.control = control;
    }

    public addScheduling() {
        let scheduling: Scheduling = this.control.getNewScheduling();

        let patient: String = this.prompt("\nDigite a id do paciente\n");
        let doctor: String = this.prompt("\nDigite a id do médico\n");

        this.control.db.scheduling.push(scheduling);


    }




}