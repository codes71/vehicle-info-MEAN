import { ApplicationConfig } from '@angular/core';
import { provideHttpClient } from '@angular/common/http'; // Import provideHttpClient
import { provideZoneChangeDetection } from '@angular/core';
import { VehicleService } from './services/vehicle.service';
import { FormsModule } from '@angular/forms';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),

    provideHttpClient(), // Add this to provide HttpClient
    FormsModule,
    { provide: VehicleService, useClass: VehicleService }
  ]
};
