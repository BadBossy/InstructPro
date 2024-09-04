import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Guide } from '../models/guide.model'; // Assuming Guide model is defined
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GuideService {

  private apiUrl = `${environment.apiBaseUrl}/guides`; // Base URL for the API

  constructor(private http: HttpClient) { }

  // Get all guides
  getGuides(): Observable<Guide[]> {
    return this.http.get<Guide[]>(this.apiUrl);
  }

  // Get a specific guide by ID
  getGuideById(id: string): Observable<Guide> {
    return this.http.get<Guide>(`${this.apiUrl}/${id}`);
  }

  // Create a new guide
  createGuide(guide: Guide): Observable<Guide> {
    return this.http.post<Guide>(this.apiUrl, guide, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    });
  }

  // Update an existing guide
  updateGuide(id: string, guide: Guide): Observable<Guide> {
    return this.http.put<Guide>(`${this.apiUrl}/${id}`, guide, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    });
  }

  // Delete a guide by ID
  deleteGuide(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  // Upload media to GridFS (assuming API is set up for this)
  uploadMedia(file: File): Observable<any> {
    const formData: FormData = new FormData();
    formData.append('file', file, file.name);

    return this.http.post(`${this.apiUrl}/upload`, formData);
  }

  // Get media file by filename
  getMedia(filename: string): Observable<Blob> {
    return this.http.get(`${this.apiUrl}/file/${filename}`, { responseType: 'blob' });
  }
}

