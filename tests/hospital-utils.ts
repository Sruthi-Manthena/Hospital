import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
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
} from "../generated/hospital/hospital"

export function createAppointmentsEvent(
  doctorAddress: Address,
  id: BigInt,
  date: BigInt,
  description: string
): Appointments {
  let appointmentsEvent = changetype<Appointments>(newMockEvent())

  appointmentsEvent.parameters = new Array()

  appointmentsEvent.parameters.push(
    new ethereum.EventParam(
      "doctorAddress",
      ethereum.Value.fromAddress(doctorAddress)
    )
  )
  appointmentsEvent.parameters.push(
    new ethereum.EventParam("id", ethereum.Value.fromUnsignedBigInt(id))
  )
  appointmentsEvent.parameters.push(
    new ethereum.EventParam("date", ethereum.Value.fromUnsignedBigInt(date))
  )
  appointmentsEvent.parameters.push(
    new ethereum.EventParam(
      "description",
      ethereum.Value.fromString(description)
    )
  )

  return appointmentsEvent
}

export function createAppointmentSchedsEvent(
  patientAddress: Address,
  medicalRecordId: BigInt,
  appointmentId: BigInt,
  date: BigInt,
  description: string
): AppointmentScheds {
  let appointmentSchedsEvent = changetype<AppointmentScheds>(newMockEvent())

  appointmentSchedsEvent.parameters = new Array()

  appointmentSchedsEvent.parameters.push(
    new ethereum.EventParam(
      "patientAddress",
      ethereum.Value.fromAddress(patientAddress)
    )
  )
  appointmentSchedsEvent.parameters.push(
    new ethereum.EventParam(
      "medicalRecordId",
      ethereum.Value.fromUnsignedBigInt(medicalRecordId)
    )
  )
  appointmentSchedsEvent.parameters.push(
    new ethereum.EventParam(
      "appointmentId",
      ethereum.Value.fromUnsignedBigInt(appointmentId)
    )
  )
  appointmentSchedsEvent.parameters.push(
    new ethereum.EventParam("date", ethereum.Value.fromUnsignedBigInt(date))
  )
  appointmentSchedsEvent.parameters.push(
    new ethereum.EventParam(
      "description",
      ethereum.Value.fromString(description)
    )
  )

  return appointmentSchedsEvent
}

export function createAssociatedPatientsEvent(
  doctorAddress: Address,
  patientId: BigInt
): AssociatedPatients {
  let associatedPatientsEvent = changetype<AssociatedPatients>(newMockEvent())

  associatedPatientsEvent.parameters = new Array()

  associatedPatientsEvent.parameters.push(
    new ethereum.EventParam(
      "doctorAddress",
      ethereum.Value.fromAddress(doctorAddress)
    )
  )
  associatedPatientsEvent.parameters.push(
    new ethereum.EventParam(
      "patientId",
      ethereum.Value.fromUnsignedBigInt(patientId)
    )
  )

  return associatedPatientsEvent
}

export function createBillingRecordsEvent(
  patientAddress: Address,
  medicalRecordId: BigInt,
  recordId: BigInt
): BillingRecords {
  let billingRecordsEvent = changetype<BillingRecords>(newMockEvent())

  billingRecordsEvent.parameters = new Array()

  billingRecordsEvent.parameters.push(
    new ethereum.EventParam(
      "patientAddress",
      ethereum.Value.fromAddress(patientAddress)
    )
  )
  billingRecordsEvent.parameters.push(
    new ethereum.EventParam(
      "medicalRecordId",
      ethereum.Value.fromUnsignedBigInt(medicalRecordId)
    )
  )
  billingRecordsEvent.parameters.push(
    new ethereum.EventParam(
      "recordId",
      ethereum.Value.fromUnsignedBigInt(recordId)
    )
  )

  return billingRecordsEvent
}

export function createDoctorsEvent(
  patientAddress: Address,
  doctorAddress: Address
): Doctors {
  let doctorsEvent = changetype<Doctors>(newMockEvent())

  doctorsEvent.parameters = new Array()

  doctorsEvent.parameters.push(
    new ethereum.EventParam(
      "patientAddress",
      ethereum.Value.fromAddress(patientAddress)
    )
  )
  doctorsEvent.parameters.push(
    new ethereum.EventParam(
      "doctorAddress",
      ethereum.Value.fromAddress(doctorAddress)
    )
  )

  return doctorsEvent
}

export function createDoctorsDatasEvent(
  doctorAddress: Address,
  id: BigInt,
  data: string
): DoctorsDatas {
  let DoctorsDatasEvent = changetype<DoctorsDatas>(newMockEvent())

  DoctorsDatasEvent.parameters = new Array()

  DoctorsDatasEvent.parameters.push(
    new ethereum.EventParam(
      "doctorAddress",
      ethereum.Value.fromAddress(doctorAddress)
    )
  )
  DoctorsDatasEvent.parameters.push(
    new ethereum.EventParam("id", ethereum.Value.fromUnsignedBigInt(id))
  )
  DoctorsDatasEvent.parameters.push(
    new ethereum.EventParam("data", ethereum.Value.fromString(data))
  )

  return DoctorsDatasEvent
}

export function createEmergencyContactsEvent(
  patientAddress: Address,
  newEmergencyContact: string
): EmergencyContacts {
  let emergencyContactsEvent = changetype<EmergencyContacts>(newMockEvent())

  emergencyContactsEvent.parameters = new Array()

  emergencyContactsEvent.parameters.push(
    new ethereum.EventParam(
      "patientAddress",
      ethereum.Value.fromAddress(patientAddress)
    )
  )
  emergencyContactsEvent.parameters.push(
    new ethereum.EventParam(
      "newEmergencyContact",
      ethereum.Value.fromString(newEmergencyContact)
    )
  )

  return emergencyContactsEvent
}

export function createInsuranceClaimsEvent(
  patientAddress: Address,
  medicalRecordId: BigInt,
  claimId: BigInt
): InsuranceClaims {
  let insuranceClaimsEvent = changetype<InsuranceClaims>(newMockEvent())

  insuranceClaimsEvent.parameters = new Array()

  insuranceClaimsEvent.parameters.push(
    new ethereum.EventParam(
      "patientAddress",
      ethereum.Value.fromAddress(patientAddress)
    )
  )
  insuranceClaimsEvent.parameters.push(
    new ethereum.EventParam(
      "medicalRecordId",
      ethereum.Value.fromUnsignedBigInt(medicalRecordId)
    )
  )
  insuranceClaimsEvent.parameters.push(
    new ethereum.EventParam(
      "claimId",
      ethereum.Value.fromUnsignedBigInt(claimId)
    )
  )

  return insuranceClaimsEvent
}

export function createMedicalRecordsEvent(
  patientAddress: Address,
  id: BigInt,
  doctorId: BigInt,
  admissionDate: BigInt,
  dischargeDate: BigInt,
  diagnoses: string,
  treatments: string,
  surgeries: string,
  status: i32
): MedicalRecords {
  let medicalRecordsEvent = changetype<MedicalRecords>(newMockEvent())

  medicalRecordsEvent.parameters = new Array()

  medicalRecordsEvent.parameters.push(
    new ethereum.EventParam(
      "patientAddress",
      ethereum.Value.fromAddress(patientAddress)
    )
  )
  medicalRecordsEvent.parameters.push(
    new ethereum.EventParam("id", ethereum.Value.fromUnsignedBigInt(id))
  )
  medicalRecordsEvent.parameters.push(
    new ethereum.EventParam(
      "doctorId",
      ethereum.Value.fromUnsignedBigInt(doctorId)
    )
  )
  medicalRecordsEvent.parameters.push(
    new ethereum.EventParam(
      "admissionDate",
      ethereum.Value.fromUnsignedBigInt(admissionDate)
    )
  )
  medicalRecordsEvent.parameters.push(
    new ethereum.EventParam(
      "dischargeDate",
      ethereum.Value.fromUnsignedBigInt(dischargeDate)
    )
  )
  medicalRecordsEvent.parameters.push(
    new ethereum.EventParam("diagnoses", ethereum.Value.fromString(diagnoses))
  )
  medicalRecordsEvent.parameters.push(
    new ethereum.EventParam("treatments", ethereum.Value.fromString(treatments))
  )
  medicalRecordsEvent.parameters.push(
    new ethereum.EventParam("surgeries", ethereum.Value.fromString(surgeries))
  )
  medicalRecordsEvent.parameters.push(
    new ethereum.EventParam(
      "status",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(status))
    )
  )

  return medicalRecordsEvent
}

export function createPrescriptionsEvent(
  patientAddress: Address,
  medicalRecordId: BigInt,
  medication: string,
  dosage: string,
  frequency: string
): Prescriptions {
  let prescriptionsEvent = changetype<Prescriptions>(newMockEvent())

  prescriptionsEvent.parameters = new Array()

  prescriptionsEvent.parameters.push(
    new ethereum.EventParam(
      "patientAddress",
      ethereum.Value.fromAddress(patientAddress)
    )
  )
  prescriptionsEvent.parameters.push(
    new ethereum.EventParam(
      "medicalRecordId",
      ethereum.Value.fromUnsignedBigInt(medicalRecordId)
    )
  )
  prescriptionsEvent.parameters.push(
    new ethereum.EventParam("medication", ethereum.Value.fromString(medication))
  )
  prescriptionsEvent.parameters.push(
    new ethereum.EventParam("dosage", ethereum.Value.fromString(dosage))
  )
  prescriptionsEvent.parameters.push(
    new ethereum.EventParam("frequency", ethereum.Value.fromString(frequency))
  )

  return prescriptionsEvent
}

export function createSurgeriesEvent(
  doctorAddress: Address,
  id: BigInt,
  surgeryDetails: string
): Surgeries {
  let surgeriesEvent = changetype<Surgeries>(newMockEvent())

  surgeriesEvent.parameters = new Array()

  surgeriesEvent.parameters.push(
    new ethereum.EventParam(
      "doctorAddress",
      ethereum.Value.fromAddress(doctorAddress)
    )
  )
  surgeriesEvent.parameters.push(
    new ethereum.EventParam("id", ethereum.Value.fromUnsignedBigInt(id))
  )
  surgeriesEvent.parameters.push(
    new ethereum.EventParam(
      "surgeryDetails",
      ethereum.Value.fromString(surgeryDetails)
    )
  )

  return surgeriesEvent
}
