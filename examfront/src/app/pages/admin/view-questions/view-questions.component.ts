import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuestionService } from 'src/app/services/question.service';

@Component({
  selector: 'app-view-questions',
  templateUrl: './view-questions.component.html',
  styleUrls: ['./view-questions.component.css']
})
export class ViewQuestionsComponent{
  subjectId: any;
  subjectTitle: any;
  questions = [
    {
      questionId: "1",
      content: "Number of primitive data types in Java are?",
      option1: "6",
      option2: "7",
      option3: "8",
      option4: "9",
      answer: "8",
    }
  ]

  constructor(private _route: ActivatedRoute, private _question: QuestionService){}

  ngOnInit(): void {
    this.subjectId = this._route.snapshot.params['SubjectId'];
    this.subjectTitle = this._route.snapshot.params['title'];
    // this._question.getQuestionsOfSubject(this.subjectId).subscribe((data:any)=>{
    //   console.log(data);
    //   this.questions = data;
    // },(error)=.{
    //   console.log(error);
    // })
  }
}
