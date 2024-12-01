import Patient from "../model/Patient";
import Doctor from "../model/Doctor";

export default class Database{

    private patients: Patient[] = [];
    private doctors: Doctor[] = [];

    public addNewPatient(patient: Patient): void{
        this.patients.push(patient);
        console.log(this.patients);
    }

    public addNewDoctor(doctor: Doctor): void{
        this.doctors.push(doctor);
        console.log(this.doctors);
    }


    public getPatientByIndex(index: number): Patient{
        return this.patients[index];
    }

    public getPatientByName(name: string): Patient{
        for (let i = 0; i < this.patients.length; i++) {
            if(this.patients[i].getName() == name){
                return this.patients[i];
            }
        }
        console.log("DEU RUIM");
        return new Patient();
    }

    public getDoctorByIndex(index: number): Doctor{
        return this.doctors[index];
    }

    public getDoctorByName(name: string): Doctor{
        for (let i = 0; i < this.doctors.length; i++) {
            if(this.doctors[i].getName() == name){
                return this.doctors[i];
            }
        }
        console.log("DEU RUIM");
        return new Doctor();
    }
}