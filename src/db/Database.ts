import Patient from "../model/Patient";
import Doctor from "../model/Doctor";
import Scheduling from "../model/Scheduling";

export default class Database{

    public patientDb: Patient[] = [];
    public doctorDb: Doctor[] = [];
    public scheduling: Scheduling[] = [];

    public addNewPatient(patient: Patient): void {
        this.patientDb.push(patient);
        this.listAllPatients();
    }
    public getPatient(index: number): Patient {
        return this.patientDb[index];
    }

    public addNewScheduling(scheduling: Scheduling) {
        this.scheduling.push(scheduling);
        
    }

    public listAllSchedulings(): string {
        let s: string = "";
        for (let i = 0; i < this.scheduling.length; i++) {
            const element = this.scheduling[i];
            s += "\nID: " +i
            s += "\nPaciente: " + element.getPatient().getName();
            s += "\nConvênio: " + element.getPatient().getAgreement();
            s += "\nMédico: " + element.getDoctor().getName();
            s += "\nEspecialidade: " + element.getDoctor().getSpecialty();
        }
        return s;
    }

    public listAllPatients(){
        for (let index = 0; index < this.patientDb.length; index++) {
            const element = this.patientDb[index];
            console.log("\n"+element.getName()+"  "+element.getAge(),"  "+element.getCpf(),"  " +element.getBloodType(),"  "+element.getAgreement())
        }
    }

    public addNewDoctor(doctor: Doctor): void {
        this.doctorDb.push(doctor);
        this.listAllDoctors();
    }
    public getDoctor(index:number): Doctor {
        return this.doctorDb[index];
    }

    public listAllDoctors(){
        for (let index = 0; index < this.doctorDb.length; index++) {
            const element = this.doctorDb[index];
            console.log("\n"+element.getName()+"  "+element.getAge(),"  "+element.getCpf(),"  "+element.getSpecialty())
        }
    }


}