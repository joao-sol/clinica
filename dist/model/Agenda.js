"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Scheduling_1 = __importDefault(require("./Scheduling"));
class Agenda extends Scheduling_1.default {
    getDate() {
        return this.date;
    }
    setDate(date) {
        this.date = date;
    }
    constructor(doctor, patient, date, db) {
        super(doctor, patient);
        this.date = this.date;
        this.db = this.db;
    }
    postpone() {
    }
}
exports.default = Agenda;
