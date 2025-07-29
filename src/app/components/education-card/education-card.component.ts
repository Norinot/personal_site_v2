import { Component, Input } from '@angular/core';
import { TypographyComponent } from '../typography/typography.component';
import { EducationItem } from '../../types';

@Component({
  selector: 'app-education-card',
  imports: [TypographyComponent],
  templateUrl: './education-card.component.html',
  styleUrl: './education-card.component.scss',
})
export class EducationCardComponent {
  @Input() educationItem: EducationItem | undefined;
}
