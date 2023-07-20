import { Component } from '@angular/core';

@Component({
  selector: 'app-view-semesters',
  templateUrl: './view-semesters.component.html',
  styleUrls: ['./view-semesters.component.css']
})
export class ViewSemestersComponent {
  Semesters = [
    {
      subjectId: 23,
      title: 'Semester 1',
      description: "this is testing category",
    },
    {
      subjectId: 24,
      title: 'Semester 2',
      description: "this is testing category",
    },
    {
      subjectId: 25,
      title: 'Semester 3',
      description: "this is testing category",
    },
    
  ]
}
