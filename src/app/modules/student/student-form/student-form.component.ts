import { Component, OnInit } from '@angular/core';
import { StudentsService } from 'src/app/services/students.service';
import { Student } from 'src/app/model/student.model';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css']
})
export class StudentFormComponent implements OnInit {

  constructor(public studentService:StudentsService) { }

  ngOnInit() {
  }

  onSubmit(student:Student){
    if(student.id===null)
    {
      this.createEmployee(student);
    }
   
  }

  createEmployee(student:Student){
    this.studentService.createEmployee(student).subscribe();
    
    console.log("Record Submitted!!!");
    
  }
}
