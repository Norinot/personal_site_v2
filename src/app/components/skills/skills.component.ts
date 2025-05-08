import { Component } from '@angular/core';
import { IconComponent } from '../icon/icon.component';
import { TypographyComponent } from '../typography/typography.component';
import { CommonModule } from '@angular/common';

type Icon =
  | 'angular'
  | 'csharp'
  | 'git'
  | 'go'
  | 'java'
  | 'javascript'
  | 'react'
  | 'typescript';

type CompetenceLevel = 'expert' | 'high' | 'medium';
interface ISkillDetails {
  level: CompetenceLevel;
  icon: Icon;
}
@Component({
  selector: 'app-skills',
  imports: [IconComponent, TypographyComponent, CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss',
})
export class SkillsComponent {
  currentFocus: CompetenceLevel | undefined;

  skills: ISkillDetails[] = [
    {
      icon: 'angular',
      level: 'expert',
    },
    {
      icon: 'csharp',
      level: 'medium',
    },
    {
      icon: 'git',
      level: 'high',
    },
    {
      icon: 'go',
      level: 'medium',
    },
    {
      icon: 'java',
      level: 'medium',
    },
    {
      icon: 'javascript',
      level: 'high',
    },
    {
      icon: 'react',
      level: 'expert',
    },
    {
      icon: 'typescript',
      level: 'expert',
    },
  ];

  focusElements(focusTarget: CompetenceLevel) {
    this.currentFocus = focusTarget;
  }

  unFocusElements() {
    this.currentFocus = undefined;
  }

  getClass(item: ISkillDetails): any {
    return {
      [item.level]: true,
      hovered: item.level === this.currentFocus,
    };
  }
}
