import { Component } from '@angular/core';
import { ButtonComponent } from '../../components/button/button.component';
import { IconComponent } from '../../components/icon/icon.component';
import { TypographyComponent } from '../../components/typography/typography.component';
import { SECTION_IDS } from '../../utils/utilityVariables';

@Component({
  selector: 'app-hero-section',
  imports: [TypographyComponent, IconComponent, ButtonComponent],
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.scss',
})
export class HeroSectionComponent {
  SECTION_IDS = SECTION_IDS;

  scrollTo(id: string) {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -160;
      const y = element.getBoundingClientRect().top + window.scrollY + yOffset;

      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  }

  openExternalLink(url: string): void {
    window.open(url, '_blank', 'noopener');
  }
}
