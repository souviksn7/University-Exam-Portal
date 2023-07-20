import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-subject',
  templateUrl: './update-subject.component.html',
  styleUrls: ['./update-subject.component.css']
})
export class UpdateSubjectComponent{

  constructor(private _route: ActivatedRoute){}

  subjectId = 0;

  ngOnInit(): void{
    this.subjectId =  this._route.snapshot.params['subjectId'];
    alert(this.subjectId);
  }
}
