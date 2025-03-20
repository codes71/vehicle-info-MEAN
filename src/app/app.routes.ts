import { Routes } from '@angular/router';
import { VehicleDetailsComponent } from './components/vehicle-details/vehicle-details.component';
import { VehicleSearchComponent } from './components/vehicle-search/vehicle-search.component';

export const routes: Routes = [
  { path: '', component: VehicleSearchComponent },
  { path: 'details', component: VehicleDetailsComponent },
  { path: '**', redirectTo: '' }
];
