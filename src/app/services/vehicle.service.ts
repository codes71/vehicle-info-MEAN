import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {
  private apiUrl = ''; // 
  private apiKey = '5ded736336msha4b2f042f7c11d4p1f2560jsn7ab52b0a058a'; // 

  constructor(private http: HttpClient) {}

  getVehicleDetails(plateNumber: string): Observable<any> {
    const headers = new HttpHeaders({
      'X-RapidAPI-Key': this.apiKey,
      'X-RapidAPI-Host': 'example-vehicle-api.com' // ✅ Replace with correct host
    });

    return this.http.get(`${this.apiUrl}/vehicle/${plateNumber}`, { headers });
  }
}

