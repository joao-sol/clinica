import Doctor from "./Doctor";
import Patient from "./Patient";
//verificar os cadastros e gravar a nova agenda
//precisa de controller, vai receber no construtor
//seleção de horários ao invés de receber escrito

export default abstract class Scheduling {

    constructor(doctor: Doctor, patient: Patient) {
    }

    abstract postpone(): void;
}

