import { Component, OnInit } from '@angular/core';
import { StudentsService } from 'src/app/services/students.service';
import { Student } from 'src/app/model/student.model';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
  studentData:Student[]=[];
  constructor(private studentService:StudentsService) { }

  ngOnInit() {
    this.getAllStudent();
  }

  getAllStudent() {
    this.studentService.getAllEmployee().subscribe((data) => {
      this.studentData = data;
    });
  }

}
