import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  constructor(public router: Router){

  }

  teacherlogin(){
    this.router.navigateByUrl('teacher-dashboard')
  }
  
  studentlogin(){
    this.router.navigateByUrl('student-dashboard')
  }

}


