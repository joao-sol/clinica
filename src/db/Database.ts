import Patient from "../model/Patient";
import Doctor from "../model/Doctor";
import Agenda from "../model/Agenda";
import User from "../model/User";

export default class Database{

    private patients: Patient[] = [];
    private doctors: Doctor[] = [];
    private agenda: Agenda[] =[];

    public addNewPatient(patient: Patient): void{
        this.patients.push(patient);
        console.log(this.patients);
    }

    findByNamePatient(name: string): Patient | undefined{
        return this.patients.find(patient => patient.name === name);
    }

    public addNewDoctor(doctor: Doctor): void{
        this.doctors.push(doctor);
        console.log(this.doctors);
    }

    findByNameDoctor(name: string): Doctor | undefined{
        return this.doctors.find(doctor => doctor.name === name);
    }

    public addNewAgenda(agenda: Agenda): void{
        this.agenda.push(agenda)
        console.log(this.agenda);
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