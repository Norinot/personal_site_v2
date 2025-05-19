import { Component } from '@angular/core';
import { TypographyComponent } from '../../components/typography/typography.component';
import { IProject } from '../../types';
import { ProjectCardComponent } from '../../components/project-card/project-card.component';

@Component({
  selector: 'app-projects',
  imports: [TypographyComponent, ProjectCardComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  projects: IProject[] = [
    {
      title: 'Business GPT',
      period: '01/2024 - Present',
      description: [
        {
          text: 'Developed a bespoke chat application leveraging the cutting-edge capabilities of ',
        },
        { text: 'LLM-based', highlight: true },
        { text: ' conversational ' },
        { text: 'AI', highlight: true },
        { text: ', tailored with a ' },
        { text: 'custom user interface', highlight: true },
        { text: ' to meet the unique requirements of a client.' },
      ],
      imageURL: '/images/baseIllustration.svg',
      projectURL: '',
      skills: ['React', 'Svelte', 'Python'],
    },
    {
      title: 'AI4TEST',
      period: '08/2023 - 04/2024',
      description: [
        {
          text: 'Contributed to the development of a web application integrating ',
        },
        {
          text: 'AI ',
          highlight: true,
        },
        {
          text: 'for ',
        },
        {
          text: 'automated testing ',
          highlight: true,
        },
        {
          text: 'of designated websites. Implemented ',
        },
        {
          text: 'performance ',
          highlight: true,
        },
        {
          text: 'statistics and a ',
        },
        {
          text: 'user-friendly ',
          highlight: true,
        },
        {
          text: 'video playback feature for comprehensive testing analysis',
        },
      ],
      imageURL: '/images/baseIllustration.svg',
      projectURL: '#something',
      skills: ['GO', 'React'],
    },
    {
      title: 'SARAY Webshop',
      period: '02/2024 - 05/2024',
      description: [
        {
          text: 'Development of a comprehensive ',
        },
        {
          text: 'e-commerce ',
          highlight: true,
        },
        {
          text: "platform for SARAY Szőnyegház, integrating standard webshop functionalities tailored to the company's specific needs.",
        },
      ],
      imageURL: '/images/baseIllustration.svg',
      projectURL: '#some',
      skills: ['Angular', 'Go'],
    },
    {
      title: 'MAPA - Manage your application',
      period: '08/2022 - 08/2023',
      description: [
        { text: 'Collaborated', highlight: true },
        {
          text: ' with a team of Frontend Developers to build a customizable ',
        },
        { text: 'CRM system', highlight: true },
        { text: ' using ' },
        { text: 'Angular', highlight: true },
        {
          text: ', designed as a baseline application that can be tailored to future client needs.',
        },
      ],
      imageURL: '/images/baseIllustration.svg',
      projectURL: '#someurl',
      skills: ['Angular', 'Java Spring Boot'],
    },
  ];
}
