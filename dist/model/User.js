"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const UserException_1 = __importDefault(require("../exception/UserException"));
class User {
    getName() {
        return this.name;
    }
    setName(name) {
        if (!name || name.length < 3) {
            throw new UserException_1.default;
        }
        else {
            this.name = name;
        }
    }
    getGender() {
        return this.gender;
    }
    setGender(gender) {
        this.gender = gender;
    }
    setAge(age) {
        this.age = age;
    }
}
exports.default = User;
