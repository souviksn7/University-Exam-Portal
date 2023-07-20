import { Component } from '@angular/core';

@Component({
  selector: 'app-view-subjects',
  templateUrl: './view-subjects.component.html',
  styleUrls: ['./view-subjects.component.css']
})
export class ViewSubjectsComponent {
  subjects=[
    {
      subjectId: 23,
      title:'Basic Java',
      description: 'Java is a high-level, class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible.',
      maxMarks:'50',
      numberOfQuestions: '20',
      active: '',
    },
    {
      subjectId: 24,
      title:'Angular',
      description: 'Angular is a TypeScript-based, free and open-source single-page web application framework led by the Angular Team at Google and by a community of individuals and corporations. Angular is a complete rewrite from the same team that built AngularJS.',
      maxMarks:'50',
      numberOfQuestions: '20',
      active: '',
    },
  ]

  // deleteSubject(subjectId: any){
  //   this._subject.deleteSubject(subjectId).subscribe((data) => {
  //     Swal.fire('Success', 'Quiz deleted', 'success');
  //   }, (error)=>{
  //     Swal.fire('Error', 'error in deleting subject', 'error');
  //   });
  // }
}
