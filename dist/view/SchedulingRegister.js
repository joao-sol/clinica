"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
class SchedulingRegister {
    constructor(control) {
        this.prompt = (0, prompt_sync_1.default)();
        this.control = control;
    }
    addScheduling() {
        let scheduling = this.control.getNewScheduling();
        let patient = this.prompt("\nDigite a id do paciente\n");
        let doctor = this.prompt("\nDigite a id do médico\n");
        this.control.db.scheduling.push(scheduling);
    }
}
exports.default = SchedulingRegister;
