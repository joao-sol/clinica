"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Patient_1 = __importDefault(require("../model/Patient"));
class PatientController {
    constructor(db) {
        this.db = db;
    }
    getNewPatient() {
        return new Patient_1.default();
    }
    registerNewPatient(patient) {
        this.db.addNewPatient(patient);
    }
}
exports.default = PatientController;
