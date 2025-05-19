import { Component } from '@angular/core';
import { ButtonComponent } from '../../app/components/button/button.component';
import { TypographyComponent } from '../../app/components/typography/typography.component';

interface INavItem {
  title: string;
  navigateTo: string;
}

// Won't include the Contact me section since it just requies me to create a more complex rendering structure for literally no reason at all.

@Component({
  selector: 'app-navigation',
  imports: [TypographyComponent, ButtonComponent],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss',
})
export class NavigationComponent {
  navItems: INavItem[] = [
    {
      navigateTo: '#',
      title: 'About me',
    },
    {
      navigateTo: '#',
      title: 'Projects',
    },
    {
      navigateTo: '#',
      title: 'Services',
    },
    {
      navigateTo: '#',
      title: 'Education',
    },
    {
      navigateTo: '#',
      title: 'Hobbies',
    },
  ];

  contactItem: INavItem = {
    navigateTo: '#',
    title: 'Contact Me',
  };
}
