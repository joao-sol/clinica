import PromptSync from "prompt-sync";
import Database from "../db/Database";
import MainController from "../controller/MainController";
import Patient from "../model/Patient";

export default class PatientRegister {

    private prompt = PromptSync();
    private control: MainController;

    public constructor(control: MainController) {
        this.control = control;
    }

    public addPatient() {
        let patient: Patient = this.control.getNewPatient();

        let name: string = this.prompt("\nDigite o nome do paciente\n");
        let age: number = parseInt(this.prompt("\nDigite a idade do paciente"));
        let cpf: string = this.prompt("\nDigite o CPF do paciente");
        let bloodType: string = this.prompt("\nDigite o tipo sanguíneo do paciente");
        let agreement: string = this.prompt("\nDigite o convênio do paciente (se houver)");
        let list: string;

        patient.setName(name);
        patient.setAge(age);
        patient.setCpf(cpf);
        patient.setBloodType(bloodType);
        patient.setAgreement(agreement);
        patient.getProfileInfo();

        this.control.db.patientDb.push(patient);

        console.log("Dados do paciente cadastrado: \n--------------------------------------")
        console.log(patient.getProfileInfo());
        console.log("--------------------------------------")

        
    }

    public listPatients(): void {
        const patient = this.control.db.patientDb;
      
        if (patient.length === 0) {
          console.log("\nNenhum paciente cadastrado.");
          return;
        }
      
        console.log("\nLista de pacientes cadastrados:\n");
        patient.forEach((pat, index) => {
          console.log(pat.getProfileInfo())
          console.log("-------------------------");
        });
      }
    
    public togglePatientActivation(): void {
        const patientId = this.prompt("\nDigite a ID do paciente: ");
        const patient = this.control.db.patientDb.find(d => d.getId() === patientId);

        if (!patient) {
            console.log("Paciente não encontrado.");
            return;
        }

        if (patient.isActive()) {
            const confirm = this.prompt("Paciente está ATIVO. Deseja inativá-lo? (s/n): ");
            if (confirm.toLowerCase() === "s") {
                patient.setInactive();
                console.log("Paciente inativado com sucesso.");
            }
        } else {
            const confirm = this.prompt("Paciente está INATIVO. Deseja ativá-lo? (s/n): ");
            if (confirm.toLowerCase() === "s") {
                patient.setActive();
                console.log("Paciente ativado com sucesso.");
            }
        }
    } 
}