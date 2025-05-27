import PromptSync from "prompt-sync";
import Database from "../db/Database";
import MainController from "../controller/MainController";
import Doctor from "../model/Doctor";
import Activatable from "../interfaces/Activable";

export default class DoctorRegister {

    private prompt = PromptSync();
    private control: MainController;

    public constructor(control: MainController) {
        this.control = control;
    }


    public addDoctor() {
        let doctor: Doctor = this.control.getNewDoctor();

        let name: string = this.prompt("\nDigite o nome do médico");
        let age: number = parseInt(this.prompt("\nDigite a idade do médico"));
        let cpf: string = this.prompt("\nDigite o cpf do médico");
        let specialty: string = this.prompt("\nDigite a especialidade do médico");

        doctor.setName(name);
        doctor.setAge(age);
        doctor.setCpf(cpf);
        doctor.setSpecialty(specialty);

        console.log("Dados do médico cadastrado: \n--------------------------------------")
        console.log(doctor.getProfileInfo());
        console.log("--------------------------------------");

        this.control.db.doctorDb.push(doctor);
    }

    public listDoctors(): void {
        const doctors = this.control.db.doctorDb;
      
        if (doctors.length === 0) {
          console.log("\nNenhum médico cadastrado.");
          return;
        }
      
        console.log("\nLista de Médicos Cadastrados:\n");
        doctors.forEach((doc, index) => {
          console.log(`Médico ${index + 1}`);
          console.log(doc.getProfileInfo());
          console.log("-------------------------");
        });
    }

    public toggleDoctorActivation(): void {
        const doctorId = this.prompt("\nDigite a ID do médico: ");
        const doctor = this.control.db.doctorDb.find(d => d.getId() === doctorId);

        if (!doctor) {
            console.log("Médico não encontrado.");
            return;
        }

        if (doctor.isActive()) {
            const confirm = this.prompt("Médico está ATIVO. Deseja inativá-lo? (s/n): ");
            if (confirm.toLowerCase() === "s") {
                doctor.setInactive();
                console.log("Médico inativado com sucesso.");
            }
        } else {
            const confirm = this.prompt("Médico está INATIVO. Deseja ativá-lo? (s/n): ");
            if (confirm.toLowerCase() === "s") {
                doctor.setActive();
                console.log("Médico ativado com sucesso.");
            }
        }
    } 

}