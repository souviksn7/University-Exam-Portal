import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-load-subject',
  templateUrl: './load-subject.component.html',
  styleUrls: ['./load-subject.component.css']
})
export class LoadSubjectComponent {

  subjects=[
    {
      subjectId: 23,
      title:'Basic Java',
      description: 'Java is a high-level, class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible.',
      maxMarks:'50',
      numberOfQuestions: '20',
      active: '',
      semester: {
        semesterId: 11,
        title: "Semester 1",
      }
    },
    {
      subjectId: 24,
      title:'Angular',
      description: 'Angular is a TypeScript-based, free and open-source single-page web application framework led by the Angular Team at Google and by a community of individuals and corporations. Angular is a complete rewrite from the same team that built AngularJS.',
      maxMarks:'50',
      numberOfQuestions: '20',
      active: '',
      semester: {
        semesterId: 22,
        title: "Semester 2",
      }
    },
    {
      subjectId: 25,
      title:'PostgreSQL',
      description: 'PostgreSQL, also known as Postgres, is a free and open-source relational database management system emphasizing extensibility and SQL compliance. It was originally named POSTGRES, referring to its origins as a successor to the Ingres database developed at the University of California, Berkeley.',
      maxMarks:'50',
      numberOfQuestions: '20',
      active: '',
      semester: {
        semesterId: 22,
        title: "Semester 2",
      }
    },
  ]

  subjectId: any;
  constructor(private _route: ActivatedRoute) {}

  ngOnInit(): void {
    this.subjectId = this._route.snapshot.params['subjectId'];
    if(this.subjectId == 0){
      console.log("Load all the subject");
    }
    else{
      console.log("Load specific subjects");
    }
  }
}
