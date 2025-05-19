import { Component } from '@angular/core';
import { TypographyComponent } from '../typography/typography.component';
import { IconComponent } from "../icon/icon.component";
import { ButtonComponent } from "../button/button.component";

@Component({
  selector: 'app-hero-section',
  imports: [TypographyComponent, IconComponent, ButtonComponent],
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.scss',
})
export class HeroSectionComponent {}
