import { Component, OnInit } from '@angular/core';

declare var createSkillTree: any;

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
    new createSkillTree();
  }
}
