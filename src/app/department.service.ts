import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Department } from './department';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {
  private apiUrl = 'http://localhost:8080'; 

  constructor(private http: HttpClient) { }

  public getDepartmentList(): Observable<Department[]> {
    return this.http.get<Department[]>(`${this.apiUrl}/departments`);
  }

  public addDepartmentList(department: Department): Observable<Department> {
    return this.http.post<Department>(`${this.apiUrl}/department/add`, department);
  }

  public updateDepartmentList(department: Department): Observable<Department> {
    return this.http.put<Department>(`${this.apiUrl}/department/update`, department);
  }

  public deleteDepartmentList(departmentId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/department/delete/${departmentId}`);
  }
}
