import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {
  private apiUrl = 'http://localhost:5000/api/vehicles'; // 

  constructor(private http: HttpClient) {}

  getVehicleDetails(plateNumber: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/${plateNumber}`);
  }
}
