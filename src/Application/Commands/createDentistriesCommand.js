"use strict";
/* eslint-disable prettier/prettier */
Object.defineProperty(exports, "__esModule", { value: true });
exports.createDentistriesCommand = void 0;
class createDentistriesCommand {
    constructor(dentistryRepository) {
        this.dentistryRepository = dentistryRepository;
    }
    async createDentistries() {
        await this.dentistryRepository.createDentistries();
    }
}
exports.createDentistriesCommand = createDentistriesCommand;
