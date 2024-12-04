"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Database_1 = __importDefault(require("../db/Database"));
const PrimaryScreen_1 = __importDefault(require("../view/PrimaryScreen"));
const PatientController_1 = __importDefault(require("./PatientController"));
const DoctorController_1 = __importDefault(require("./DoctorController"));
const UserException_1 = __importDefault(require("../exception/UserException"));
class Router {
    constructor() {
        this.db = new Database_1.default();
        this.ps = new PrimaryScreen_1.default(this);
        this.patientController = new PatientController_1.default(this.db);
        this.doctorController = new DoctorController_1.default(this.db);
        this.doctorException = new UserException_1.default();
        this.ps.getFirstScreen();
    }
}
exports.default = Router;
