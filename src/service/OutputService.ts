import Patient from "../model/Patient";

export default class OutputService {

    public printObjectState(obj: Patient) {
        console.log("----------------");
        console.log(obj);
    }
}