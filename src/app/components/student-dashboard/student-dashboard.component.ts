import { Component } from '@angular/core';
import { Questions } from '../teacher-dashboard/teacher-dashboard.component';
import { FormsModule } from '@angular/forms';
import { CommonModule, NgClass } from '@angular/common';

@Component({
  selector: 'app-student-login',
  imports: [FormsModule, CommonModule],
  templateUrl:'./student-dashboard.component.html',
  styleUrl: './student-dashboard.component.scss'
})
export class StudentLoginComponent {

  sno:number=0;
  num1:number | undefined;
  num2:number | undefined;
  operator : string='';
  problems:Questions[] =[];
  answer : string[]  = [];

  submitData :boolean =false ;



  ngOnInit(){
    let data:any = localStorage.getItem("Questions");
    this.problems = JSON.parse(data);
    console.log(this.problems);
  }
  clearInputData() {
    this.num1 = undefined
    this.num2 = undefined
    this.operator = ""
  }

  submitAns(){
   let allAnswered = true ;
   

   this.problems.forEach((value ,index ) =>
    {
      
      if(!this.answer[index]){
      
        allAnswered = false;
      }

    });
    
    if(!allAnswered){
      return alert("please fill the all Questions")
    }


    this.problems = this.problems.map((val,index)=>(
      {...val,answer:this.answer[index]}));

    console.log(this.problems);
    

    this.submitData = true


  }

  restart() {
    this.problems = []  
    localStorage.removeItem("Questions");

  



  

}



}

