import { Component, Input } from '@angular/core';
import { IProject } from '../../types';
import { ButtonComponent } from "../button/button.component";

@Component({
  selector: 'app-project-card',
  imports: [ButtonComponent],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.scss',
})
export class ProjectCardComponent {
  @Input() project!: IProject;
  expanded = false;

  toggleExpand(): void {
    this.expanded = !this.expanded;
  }
}
