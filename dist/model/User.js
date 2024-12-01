"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Patient {
    getName() {
        return this.name;
    }
    setName(name) {
        this.name = name;
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
exports.default = Patient;
