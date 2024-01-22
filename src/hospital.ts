import {
  Appointments as AppointmentsEvent,
  AppointmentScheds as AppointmentSchedsEvent,
  AssociatedPatients as AssociatedPatientsEvent,
  BillingRecords as BillingRecordsEvent,
  Doctors as DoctorsEvent,
  DoctorsDatas as DoctorsDatasEvent,
  EmergencyContacts as EmergencyContactsEvent,
  InsuranceClaims as InsuranceClaimsEvent,
  MedicalRecords as MedicalRecordsEvent,
  Prescriptions as PrescriptionsEvent,
  Surgeries as SurgeriesEvent
} from "../generated/hospital/hospital"
import {
  Appointments,
  AppointmentScheds,
  AssociatedPatients,
  BillingRecords,
  Doctors,
  DoctorsDatas,
  EmergencyContacts,
  InsuranceClaims,
  MedicalRecords,
  Prescriptions,
  Surgeries
} from "../generated/schema"

export function handleAppointments(event: AppointmentsEvent): void {
  let entity = new Appointments(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.doctorAddress = event.params.doctorAddress
  entity.date = event.params.date
  entity.description = event.params.description
  entity.save()
}

export function handleAppointmentScheds(event: AppointmentSchedsEvent): void {
  let entity = new AppointmentScheds(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.patientAddress = event.params.patientAddress
  entity.medicalRecordId = event.params.medicalRecordId
  entity.appointmentId = event.params.appointmentId
  entity.date = event.params.date
  entity.description = event.params.description
  entity.save()
}

export function handleAssociatedPatients(event: AssociatedPatientsEvent): void {
  let entity = new AssociatedPatients(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.doctorAddress = event.params.doctorAddress
  entity.patientId = event.params.patientId

  entity.save()
}

export function handleBillingRecords(event: BillingRecordsEvent): void {
  let entity = new BillingRecords(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.patientAddress = event.params.patientAddress
  entity.medicalRecordId = event.params.medicalRecordId
  entity.recordId = event.params.recordId
  entity.save()
}

export function handleDoctors(event: DoctorsEvent): void {
  let entity = new Doctors(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.patientAddress = event.params.patientAddress
  entity.doctorAddress = event.params.doctorAddress
  entity.save()
}

export function handleDoctorsDatas(event: DoctorsDatasEvent): void {
  let entity = new DoctorsDatas(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.doctorAddress = event.params.doctorAddress
  entity.data = event.params.data
  entity.save()
}

export function handleEmergencyContacts(event: EmergencyContactsEvent): void {
  let entity = new EmergencyContacts(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.patientAddress = event.params.patientAddress
  entity.newEmergencyContact = event.params.newEmergencyContact

  entity.save()
}

export function handleInsuranceClaims(event: InsuranceClaimsEvent): void {
  let entity = new InsuranceClaims(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.patientAddress = event.params.patientAddress
  entity.medicalRecordId = event.params.medicalRecordId
  entity.claimId = event.params.claimId
  entity.save()
}

export function handleMedicalRecords(event: MedicalRecordsEvent): void {
  let entity = new MedicalRecords(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.patientAddress = event.params.patientAddress
  entity.doctorId = event.params.doctorId
  entity.admissionDate = event.params.admissionDate
  entity.dischargeDate = event.params.dischargeDate
  entity.diagnoses = event.params.diagnoses
  entity.treatments = event.params.treatments
  entity.surgeries = event.params.surgeries
  entity.status = event.params.status
  entity.save()
}

export function handlePrescriptions(event: PrescriptionsEvent): void {
  let entity = new Prescriptions(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.patientAddress = event.params.patientAddress
  entity.medicalRecordId = event.params.medicalRecordId
  entity.medication = event.params.medication
  entity.dosage = event.params.dosage
  entity.frequency = event.params.frequency
  entity.save()
}


export function handleSurgeries(event: SurgeriesEvent): void {
  let entity = new Surgeries(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  
    )
  entity.doctorAddress = event.params.doctorAddress
  entity.surgeryDetails = event.params.surgeryDetails
  entity.save()
}
