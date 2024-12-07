"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Scheduling_1 = __importDefault(require("./Scheduling"));
//reunir as classes doctor e patient e horário
class Agenda extends Scheduling_1.default {
    constructor(doctor, patient, date) {
        super(doctor, patient, date);
    }
    getDate() {
        return this.date;
    }
    setDate(date) {
        this.date = date;
    }
    postpone(patientName, doctorName, date) {
    }
}
exports.default = Agenda;
