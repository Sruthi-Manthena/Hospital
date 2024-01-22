# Hospital Subgraph

## Overview

This subgraph is designed to index and query data related to hospital management. It leverages the Graph Protocol to efficiently index Ethereum blockchain events and expose a GraphQL API for querying the data.

## Features Implemented

### 1. Entities

The subgraph defines the following entities:

- **Appointments**: Represents appointments scheduled between doctors and patients.
- **AppointmentScheds**: Records scheduled appointments for patients.
- **AssociatedPatients**: Establishes associations between doctors and patients.
- **BillingRecords**: Stores billing records associated with patient medical data.
- **Doctors**: Tracks relationships between patients and doctors.
- **DoctorsData**: Captures additional data associated with doctors.
- **EmergencyContacts**: Records emergency contact information for patients.
- **InsuranceClaims**: Logs insurance claims made by patients.
- **MedicalRecords**: Stores comprehensive medical records for patients.
- **Prescriptions**: Documents prescriptions given to patients.
- **Surgeries**: Records information about surgeries performed by doctors.

### 2. Relationships

The subgraph implements various relationships between entities:

- **One-One Relationship**: Example - Relationship between `Surgeries` and `DoctorsData`.
- **One-Many Relationship**: Example - Appointments scheduled for a single patient.
- **Many-Many Relationship**: Example - Doctors associated with multiple patients.
- **Reverse Lookups**: Example - Finding associated patients for a given doctor.

### 3. Full Text Search

A full-text search capability is added to the subgraph for enhanced querying. It allows searching for entities based on text documents in specific fields.

## Usage

To utilize this subgraph, deploy it using The Graph CLI and connect it to a compatible GraphQL client. The generated GraphQL API enables powerful queries for hospital-related data.

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   
2. Deploy the subgraph:
   ```bash
   graph deploy --node https://api.thegraph.com/deploy/

3. Connect to the GraphQL API:
   ```bash
   Your GraphQL API Endpoint: https://api.thegraph.com/subgraphs

## License
This subgraph is open-source and distributed under the MIT License.
