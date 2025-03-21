import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Vehicle {
  plateNumber: string;
  make: string;
  model: string;
  year: number;
  color: string;
  status: string;
  registrationExpiry: Date;
  imageUrl: string;
  owner: {
    name: string;
    licenseNumber: string;
    address: string;
    contactNumber: string;
  };
  insuranceInfo: {
    provider: string;
    policyNumber: string;
    validUntil: Date;
  };
  violations: Array<{
    date: Date;
    type: string;
    fine: number;
    status: string;
  }>;
}

@Component({
  selector: 'app-vehicle-details',
  templateUrl: './vehicle-details.component.html',
  styleUrls: ['./vehicle-details.component.css'],
  imports: [CommonModule]
})
export class VehicleDetailsComponent {
  @Input() vehicle: Vehicle | null = null;
}