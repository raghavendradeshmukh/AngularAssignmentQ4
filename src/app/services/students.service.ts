import { Injectable } from '@angular/core';
import { Student } from '../model/student.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  mockUrl = "http://localhost:3000/students";

  studentInfo:Student={
    id:null,
    firstname:'',
    lastname:'',
    class:'',
    percentage:null,
    marks:null
};


  constructor(private http: HttpClient) { }

  getAllEmployee(): Observable<Student[]> {
    return this.http.get<Student[]>(this.mockUrl);
  }

  createEmployee(student: Student) {
    return this.http.post<Student>(this.mockUrl, student);
  }

}
