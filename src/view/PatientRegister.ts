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
}