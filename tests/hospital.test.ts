import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { Address, BigInt } from "@graphprotocol/graph-ts"
import { Appointments } from "../generated/schema"
import { Appointments as AppointmentsEvent } from "../generated/hospital/hospital"
import { handleAppointments } from "../src/hospital"
import { createAppointmentsEvent } from "./hospital-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let doctorAddress = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let id = BigInt.fromI32(234)
    let date = BigInt.fromI32(234)
    let description = "Example string value"
    let newAppointmentsEvent = createAppointmentsEvent(
      doctorAddress,
      id,
      date,
      description
    )
    handleAppointments(newAppointmentsEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("Appointments created and stored", () => {
    assert.entityCount("Appointments", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "Appointments",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "doctorAddress",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "Appointments",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "date",
      "234"
    )
    assert.fieldEquals(
      "Appointments",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "description",
      "Example string value"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
