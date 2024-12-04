import PromptSync from "prompt-sync";
import Router from "../control/Router";
import Doctor from "../model/Doctor";

export default class DoctorScreen {

    private prompt = PromptSync();
    private router!: Router; //injeção de dependência

    constructor(router: Router) {
        this.router = router;
    }

    // este método requisita as informações para o cadastro dos médicos
    public registerDoctor(): void {
        	//para registrar um novo médico será solicitado
            //todos os dados de "Patient.ts" e "Doctor.ts"
            let doctor: Doctor = this.router.doctorController.getNewDoctor();
            
            // nome
            let doctorName = this.prompt("Digite o nome do médico ");
            doctor.setName(doctorName);
            //peço o gênero
            let doctorGender = this.prompt("Digite o gênero do médico ");
            doctor.setGender(doctorGender);
            
            // Peço idade
            let doctorAge = this.prompt("Digite a idade do médico ");
            doctor.setAge(doctorAge);
                        
            let doctorSpecialty = this.prompt("Digite a especialidade do médico ")
            doctor.setSpecialty(doctorSpecialty);

            // chama o DoctorController para gravar no banco
            this.router.doctorController.registerNewDoctor(doctor);
            
    }
}