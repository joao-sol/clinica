"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Database_1 = __importDefault(require("../db/Database"));
const Patient_1 = __importDefault(require("../model/Patient"));
const Doctor_1 = __importDefault(require("../model/Doctor"));
const MainScreen_1 = __importDefault(require("../view/MainScreen"));
const Scheduling_1 = __importDefault(require("../model/Scheduling"));
class MainController {
    constructor() {
        this.db = new Database_1.default();
        new MainScreen_1.default(this);
    }
    getNewPatient() {
        return new Patient_1.default();
    }
    getNewDoctor() {
        return new Doctor_1.default();
    }
    getNewScheduling() {
        return new Scheduling_1.default();
    }
}
exports.default = MainController;
