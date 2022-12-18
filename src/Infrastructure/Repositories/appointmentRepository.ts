/* eslint-disable prettier/prettier */
import {IAppointment} from '../../Domain/Intefaces/IAppointment';
import Appointment from '../Models/appointmentSchema';
import {IAppointmentRepository} from '../../Domain/Intefaces/IAppointmentRepository';
import { AnyError } from 'mongodb';

export class appointmentRepository implements IAppointmentRepository {
  async registerAppointment(newAppointment: IAppointment): Promise<void> {
    if (newAppointment.date.getMinutes() >= 0 && newAppointment.date.getMinutes() <= 29) {
      newAppointment.date.setMinutes(0);
      newAppointment.date.setSeconds(0);
    }
    else if (newAppointment.date.getMinutes() >= 30 && newAppointment.date.getMinutes() <= 59) {
      newAppointment.date.setMinutes(30);
      newAppointment.date.setSeconds(0);
    }
    console.log(newAppointment.date);
    await Appointment.create(newAppointment);
  }
  async updateAppointment(newAppointment: IAppointment, newDate: Date ): Promise<string> {
    console.log(newDate)
    let status: string = ''
    const filter = { date: newAppointment.date,dentistId: newAppointment.dentistId}
    const update = {date: newDate}
    await Appointment.updateOne(filter, update).then((appointment) => {
      console.log(appointment)
      if(appointment.modifiedCount === 0) {
        status = 'not updated'
      }
      else {
        status = 'updated'
      }
    }).catch((err) => {
      console.log(err)
    })
    return status
  }
  async deleteAppointment(newAppointment: IAppointment): Promise<any> {
    let status: any
    const filter = { date: newAppointment.date,dentistId: newAppointment.dentistId}
    await Appointment.deleteOne(filter).then((result) => {
      status = result
    }).catch((err) => {
      console.log(err)
    })
    return status
  }
}
