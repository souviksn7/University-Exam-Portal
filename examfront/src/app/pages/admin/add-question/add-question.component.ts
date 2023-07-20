import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.css']
})
export class AddQuestionComponent implements OnInit{
  
  subjectId: any;
  subjectTitle: any;
  question = {
    subject: {
      subjectId: '',
    },
    content: '',
    option1: '',
    option2: '',
    option3: '',
    option4: '',
    answer: '',
  };

  // to fetch the value of subjectId we have to use "Activated route"
  constructor(private _route: ActivatedRoute) {}

  ngOnInit(): void {
    this.subjectId = this._route.snapshot.params['subjectId'];
    this.subjectTitle = this._route.snapshot.params['title'];
    this.question.subject.subjectId = this.subjectId;
  }
}
