import PromptSync from "prompt-sync";
import Router from "../control/Router";
import Patient from "../model/Patient";

export default class PatientScreen {

    private prompt = PromptSync();
    private router!: Router;

    constructor(router: Router) {
        this.router = router;
    }

    // este método resuisita as informações para o cadastro dos pacientes
    public registerPatient(): void {
        	//para registrar um novo paciente será solicitado
            //todos os dados de "Patient.ts"
            let patient: Patient = this.router.patientController.getNewPatient();
            
            // nome
            let patientName = this.prompt("Digite o nome do paciente ");
            patient.setName(patientName);
            
            //peço o gênero
            let patientGender = this.prompt("Digite o gênero do paciente ");
            patient.setGender(patientGender);
            
            // Peço idade
            let patientAge = this.prompt("Digite a idade do paciente ");
            patient.setAge(patientAge);
                        
            // Peço o convênio
            let patientAgreement = this.prompt("Digite o convênio do paciente ");
            patient.setAgreement(patientAgreement);
                        
            let patientAllergy = this.prompt("O paciente tem alguma alergia? Se sim digite qual ");
            patient.setAllergy(patientAllergy);
            // chama o PatientController para gravar no banco
            this.router.patientController.registerNewPatient(patient);
    }
}