import { Component } from '@angular/core';
import { TypographyComponent } from '../../components/typography/typography.component';
import { EducationCardComponent } from '../../components/education-card/education-card.component';
import { EducationItem } from '../../types';

@Component({
  selector: 'app-education',
  imports: [TypographyComponent, EducationCardComponent],
  templateUrl: './education.component.html',
  styleUrl: './education.component.scss',
})
export class EducationComponent {
  education: EducationItem[] = [
    {
      cityAndCountry: 'Miskolc, Hungary',
      competencies: [
        'Desktop Application Development',
        'Networking',
        'Web Development',
        'System Administration',
      ],
      schoolName: 'Baross Gábor Vocation High School',
      timePeriod: '2014 - 2018',
      title: 'High-School Graduation 3142/9 FEOR',
    },
    {
      cityAndCountry: 'Miskolc, Hungary',
      competencies: [
        'Desktop Application Development',
        'Networking',
        'Web Development',
        'Web Design',
      ],
      schoolName: 'Kandó Kálmán IT High School',
      timePeriod: '2019 - 2021',
      title: 'OKJ 54 481 05',
    },
  ];
}
