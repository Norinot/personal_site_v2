import { Component } from '@angular/core';
import { TypographyComponent } from '../../components/typography/typography.component';
import { IProject } from '../../types';
import { ProjectCardComponent } from '../../components/project-card/project-card.component';
import { g_projects, SECTION_IDS } from '../../utils/utilityVariables';

@Component({
  selector: 'app-projects',
  imports: [TypographyComponent, ProjectCardComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  SECTION_IDS = SECTION_IDS;

  projects: IProject[] = g_projects;
}
