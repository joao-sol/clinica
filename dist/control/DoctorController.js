"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Doctor_1 = __importDefault(require("../model/Doctor"));
class DoctorController {
    constructor(db) {
        this.db = db;
    }
    getNewDoctor() {
        return new Doctor_1.default();
    }
    registerNewDoctor(doctor) {
        this.db.addNewDoctor(doctor);
    }
}
exports.default = DoctorController;
