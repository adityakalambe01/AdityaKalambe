import { Component, OnInit } from '@angular/core';

declare var createEducationTree:any;

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit{
  constructor() { }
  ngOnInit(): void {
    new createEducationTree();
  }

}
