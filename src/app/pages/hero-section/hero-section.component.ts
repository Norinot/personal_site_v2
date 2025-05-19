import { Component } from '@angular/core';
import { ButtonComponent } from '../../components/button/button.component';
import { IconComponent } from '../../components/icon/icon.component';
import { TypographyComponent } from '../../components/typography/typography.component';

@Component({
  selector: 'app-hero-section',
  imports: [TypographyComponent, IconComponent, ButtonComponent],
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.scss',
})
export class HeroSectionComponent {}
