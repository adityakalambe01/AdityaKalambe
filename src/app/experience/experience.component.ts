import { Component, OnInit } from '@angular/core';


declare var createExperienceTree: any;

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {
  constructor() { }
  ngOnInit(): void {
    new createExperienceTree();
  }

}
