/* eslint-disable prettier/prettier */
import {Appointment} from '../../Domain/Entities/Appointment';
import { IAppointmentRepository } from '../../Domain/Intefaces/IAppointmentRepository';
import { convertDate } from '../../Domain/Utils/convertDate';

export class deleteAppointmentCommand {
  constructor(private readonly appointmentRepository: IAppointmentRepository) {}

  public async deleteAppointment(userId: string, dentistId: string, requestId: string,issuance: string, date: string, newDate:string) {
    return await this.appointmentRepository.deleteAppointment(requestId);
  }
}