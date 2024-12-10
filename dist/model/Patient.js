"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const User_1 = __importDefault(require("./User"));
class Patient extends User_1.default {
    getAgreement() {
        return this.agreement;
    }
    setAgreement(agreement) {
        this.agreement = agreement;
    }
    getAllergy() {
        return this.allergy;
    }
    setAllergy(allergy) {
        this.allergy = allergy;
    }
    findByNamePatient(patientName) {
    }
}
exports.default = Patient;
