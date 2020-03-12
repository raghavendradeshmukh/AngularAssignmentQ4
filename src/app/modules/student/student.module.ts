import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentFormComponent } from './student-form/student-form.component';
import { StudentListComponent } from './student-list/student-list.component';
import { StudentsService } from 'src/app/services/students.service';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [StudentFormComponent, StudentListComponent],
  imports: [
    CommonModule,HttpClientModule,FormsModule
  ],
  exports:[StudentFormComponent, StudentListComponent],
  providers:[StudentsService]
})
export class StudentModule { }
