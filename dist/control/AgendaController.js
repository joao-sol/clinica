"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Agenda_1 = __importDefault(require("../model/Agenda"));
class AgendaController {
    constructor(db) {
        this.db = db;
    }
    getNewAgenda() {
        return new Agenda_1.default(this.doctor, this.patient, this.date);
    }
    registerNewAgenda(agenda) {
        this.db.addNewAgenda(agenda);
    }
}
exports.default = AgendaController;
