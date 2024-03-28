import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { TreeComponent } from './tree/tree.component';
import { SkillsComponent } from './skills/skills.component';
import { ExperienceComponent } from './experience/experience.component';
import { EducationComponent } from './education/education.component';

// const routes: Routes = [];


const routes:Routes =[
  {
    component: HomeComponent,
    path: ''
  },
  {
    component: TreeComponent,
    path: 'about'
  },
  {
    component: ContactComponent,
    path: 'contact'
  },
  {
    component: SkillsComponent,
    path: 'skills'
  },
  {
    component: ExperienceComponent,
    path: 'experience'
  },
  {
    component: EducationComponent,
    path: 'education'
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
