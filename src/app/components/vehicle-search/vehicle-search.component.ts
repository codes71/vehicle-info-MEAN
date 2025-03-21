import { Component, Output, EventEmitter } from '@angular/core';
import { VehicleService } from '../../services/vehicle.service';
import { Vehicle } from '../../models/vehicle.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
@Component({
  selector: 'app-vehicle-search',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './vehicle-search.component.html',
  styleUrls: ['./vehicle-search.component.css']
})
export class VehicleSearchComponent {
  plateNumber: string = '';
  vehicleFound: boolean = false;
  err: any = null;
  searchHistory: Vehicle[] = [];
  isLoading: boolean = false;
  //@Input() vechicleSerach:string
  
  @Output() vehicleSelected = new EventEmitter<Vehicle | null>();

  constructor(private vehicleService: VehicleService) {}
  onInputChange(event:any){
    this.plateNumber = event.target.value;
  }

  searchVehicle() {
    if (!this.plateNumber.trim()) return;
    this.err = null
    this.isLoading = true;
    this.vehicleService.getVehicleDetails(this.plateNumber).subscribe(
      vehicle => {
          this.isLoading = false;
          if (vehicle) {
            this.vehicleSelected.emit(vehicle);
            if (!this.searchHistory.some(v => v.id === vehicle.id)) {
              this.searchHistory = [vehicle, ...this.searchHistory].slice(0, 5);
            }
          } else {
            this.vehicleSelected.emit(null);
          }
          this.vehicleFound = true;
        },
        error =>{
          console.log('error',error);
          this.isLoading = false
          this.err = error
          if(error.status === 404){
            this.err.message = 'Vehicle not found'
          }else{
            this.err.message = 'An error occurred while searching for the vehicle'
          }

        }
      
      );
  }

  selectFromHistory(vehicle: Vehicle) {
    this.plateNumber = vehicle.plateNumber;
    this.vehicleSelected.emit(vehicle);
  }
}