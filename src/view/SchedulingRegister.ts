import Scheduling from "../model/Scheduling";
import PromptSync from "prompt-sync";
import MainController from "../controller/MainController";
import { DoctorStatus } from "../types/DoctorStatus";
import MyError from "../interfaces/MyError";

export default class SchedulingRegister {

    private prompt = PromptSync();
    private control: MainController;

    public constructor(control: MainController) {
        this.control = control;
    }

    public addScheduling() {
        //Try-catch
        try{
            let scheduling: Scheduling = this.control.getNewScheduling();

            //buscar em db tanto paciente quanto médico que não são strings, mas doctor e patient
            //precisa passar os objetos
            let patientId: string = this.prompt("\nDigite a id do paciente\n");
            let doctorId: string = this.prompt("\nDigite a id do médico\n");
            //Recebe data como string
            let dateInput: string = this.prompt("\nDigite a data do agendamento (formato: DD/MM/AAAA)\n");
    
            //Converte a string de data para tipo date
            //Split divide a string em partes, map converte para números e new date cria a data a partir das saídas disso
            //Mês em Typescript começa em 0 (zero-based)
            const [day, month, year] = dateInput.split("/").map(Number);
            if (!day || !month || !year) {
                throw new MyError("Data inválida. Use o formato DD/MM/AAAA.")
            }

            const schedulingDate = new Date(year, month - 1, day);

            const patient = this.control.db.patientDb.find(p => p.getId() === patientId);
            const doctor = this.control.db.doctorDb.find(d => d.getId() === doctorId);

            if (!patient) {
                throw new MyError("Paciente não encontrado!");
            }

            if (!doctor) {
                throw new MyError("Médico não encontrado!")
            }

            if (doctor!.getStatus() === DoctorStatus.Busy) {
                console.log("Médico ocupado, escolha outro!");
                return;
            }
            
            //this.control.db.scheduling.push(scheduling);

            scheduling.doSchedule(patient!, doctor!, schedulingDate);
            //Atualiza status do médico para 1 == ocupado.
            doctor!.setStatus(DoctorStatus.Busy);

            this.control.db.addNewScheduling(scheduling);
            console.log("✅ Agendamento realizado com sucesso!");
        } 
        catch (error: any) {
            console.log("Erro ao agendar consulta: " +error.message)
        }
    }
}