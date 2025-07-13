import { Component } from '@angular/core';
import { TypographyComponent } from '../../components/typography/typography.component';
import { IServices } from '../../types';
import { g_services } from '../../utils/utilityVariables';
import { IconComponent } from "../../components/icon/icon.component";

@Component({
  selector: 'app-services',
  imports: [TypographyComponent, IconComponent],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss',
})
export class ServicesComponent {
  services: IServices[] = g_services;
}
