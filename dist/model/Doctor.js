"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const User_1 = __importDefault(require("./User"));
class Doctor extends User_1.default {
    getSpecialty() {
        return this.specialty;
    }
    setSpecialty(specialty) {
        this.specialty = specialty;
    }
    findByNameDoctor(doctorName) {
    }
}
exports.default = Doctor;
