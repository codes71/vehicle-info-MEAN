import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule
import { Vehicle } from './models/vehicle.model';
import { VehicleSearchComponent } from './components/vehicle-search/vehicle-search.component';
import { VehicleDetailsComponent } from './components/vehicle-details/vehicle-details.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, HttpClientModule, VehicleSearchComponent, VehicleDetailsComponent], // Add HttpClientModule
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  activeVehicle: Vehicle | null = null;
  isLoading = false;

  onVehicleSelected(vehicle: Vehicle | null): void {
    this.isLoading = true;
    setTimeout(() => {
      this.activeVehicle = vehicle;
      this.isLoading = false;
    }, 500);
  }
}
