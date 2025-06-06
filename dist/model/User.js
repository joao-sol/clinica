"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class User {
    constructor() {
    }
    getName() {
        return this.name;
    }
    setName(name) {
        this.name = name;
    }
    getAge() {
        return this.age;
    }
    setAge(age) {
        this.age = age;
    }
    getCpf() {
        return this.cpf;
    }
    setCpf(cpf) {
        this.cpf = cpf;
    }
    getProfileInfo() {
        return `Nome: ${this.name}\n
        Idade: ${this.age}\n
        CPF: ${this.cpf}\n`;
    }
}
exports.default = User;
