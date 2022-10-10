import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentsService } from '../service/students.service';
import { Students } from '../Students.model';

@Component({
  selector: 'app-students-form',
  templateUrl: './students-form.component.html',
  styleUrls: ['./students-form.component.scss'],
})
export class StudentsFormComponent implements OnInit {
  public studentForm: FormGroup;
  public studentFormData: Students[] = [];
  id: any;
  constructor(
    private studentService: StudentsService,
    private activatedRoute: ActivatedRoute,
    private fb: FormBuilder,
    private router: Router
  ) {
    this.activatedRoute.params.subscribe((params) => {
      this.id = params['id'];
      // this.editById();
    });

    this.studentForm = this.fb.group({
      name: ['', Validators.required],
      gender: ['', Validators.required],
      email: ['', Validators.required],
      dob: ['', Validators.required],
      phone: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    if(this.id){
      this.getById();
    }
    // this.getById();
  }

  onSubmit() {
  if(this.studentForm.valid){
    if(this.id){
      this.updateData();
    }
    else{
      this.createStudent();
    }
  }
  this.router.navigate(['students/student-list'])
  }

  getStudentsData() {
    this.studentService.getStudents().subscribe(() => {});
  }

  createStudent() {
    this.studentService.createStudents(this.studentForm.value).subscribe((result) => {
        alert('successfully saved.')
        this.getStudentsData();
      });
  }

  getById() {
    // debugger
    this.studentService.getStudentDetailsbyId(Number(this.id)).subscribe((data) => {
      this.studentForm.patchValue(data);
    });
  }

  updateData() {
    this.studentService
      .updateStudents(this.studentForm.value, this.id)
      .subscribe(() => {
      });
      this.getStudentsData();
  }

  // navigation
  onListClick() {
    this.router.navigate(['students/student-list']);
  }
}
