"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAppointmentsCommand = void 0;
class getAppointmentsCommand {
    constructor(appointmentRepository) {
        this.appointmentRepository = appointmentRepository;
    }
    async getAllAppointments(dentistId) {
        return await this.appointmentRepository.getAllAppointments(Number(dentistId));
    }
    async getAppointmentsByUserId(userID) {
        return await this.appointmentRepository.getAppointmentsByUserId(userID);
    }
}
exports.getAppointmentsCommand = getAppointmentsCommand;
