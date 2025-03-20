import { Component, Output, EventEmitter } from '@angular/core';
import { VehicleService } from '../../services/vehicle.service';
import { Vehicle } from '../../models/vehicle.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-vehicle-search',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './vehicle-search.component.html',
  styleUrls: ['./vehicle-search.component.css']
})
export class VehicleSearchComponent {
  plateNumber: string = '';
  searchHistory: Vehicle[] = [];
  isLoading: boolean = false;
  //@Input() vechicleSerach:string
  
  @Output() vehicleSelected = new EventEmitter<Vehicle | null>();

  constructor(private vehicleService: VehicleService) {}

  searchVehicle() {
    if (!this.plateNumber.trim()) return;

    this.isLoading = true;
    this.vehicleService.getVehicleDetails(this.plateNumber).subscribe(vehicle => {
      this.isLoading = false;
      if (vehicle) {
        this.vehicleSelected.emit(vehicle);
        if (!this.searchHistory.some(v => v.id === vehicle.id)) {
          this.searchHistory = [vehicle, ...this.searchHistory].slice(0, 5);
        }
      } else {
        this.vehicleSelected.emit(null);
      }
    });
  }

  selectFromHistory(vehicle: Vehicle) {
    this.plateNumber = vehicle.plateNumber;
    this.vehicleSelected.emit(vehicle);
  }
}