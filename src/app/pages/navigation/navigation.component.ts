import { Component } from '@angular/core';
import { ButtonComponent } from '../../components/button/button.component';
import { TypographyComponent } from '../../components/typography/typography.component';
import { SECTION_IDS } from '../../utils/utilityVariables';

interface INavItem {
  title: string;
  navigateTo: string;
  color?: 'primary' | 'secondary' | 'accent';
}

// Won't include the Contact me section since it just requies me to create a more complex rendering structure for literally no reason at all.

@Component({
  selector: 'app-navigation',
  imports: [TypographyComponent, ButtonComponent],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss',
})
export class NavigationComponent {
  SECTION_IDS = SECTION_IDS;

  navItems: INavItem[] = [
    { navigateTo: SECTION_IDS.HERO, title: 'About me' },
    { navigateTo: SECTION_IDS.SKILLS, title: 'Skills' },
    { navigateTo: SECTION_IDS.PROJECTS, title: 'Projects' },
    { navigateTo: SECTION_IDS.SERVICES, title: 'Services' },
    { navigateTo: SECTION_IDS.EDUCATION, title: 'Education' },
    { navigateTo: SECTION_IDS.HOBBIES, title: 'Hobbies' },
  ];

  contactItem: INavItem = {
    navigateTo: SECTION_IDS.CONTACT,
    title: 'Contact Me',
  };

  scrollTo(id: string) {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.scrollY + yOffset;

      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  }
}
