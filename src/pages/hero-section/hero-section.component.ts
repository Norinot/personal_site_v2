import { Component } from '@angular/core';
import { ButtonComponent } from '../../app/components/button/button.component';
import { IconComponent } from '../../app/components/icon/icon.component';
import { TypographyComponent } from '../../app/components/typography/typography.component';

@Component({
  selector: 'app-hero-section',
  imports: [TypographyComponent, IconComponent, ButtonComponent],
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.scss',
})
export class HeroSectionComponent {}
