export interface Vehicle {
  id: number;
  plateNumber: string;
  make: string;
  model: string;
  year: number;
  color: string;
  registrationDate: string;
  registrationExpiry: string;
  owner: {
    name: string;
    address: string;
    licenseNumber: string;
    contactNumber: string;
  };
  insuranceInfo: {
    provider: string;
    policyNumber: string;
    validUntil: string;
  };
  violations: {
    date: string;
    type: string;
    status: string;
    fine: string;
  }[];
  status: string;
  
}