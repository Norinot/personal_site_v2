import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-typography',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './typography.component.html',
  styleUrl: './typography.component.scss',
})
export class TypographyComponent {
  @Input() font: 'heading' | 'serif' | 'body' | 'mono' | 'vt323' = 'body';
  @Input() size: number = 4;
  @Input() tag: string = 'p';
  @Input() customClass: string = '';
  @Input() weight: 'thin' | 'regular' | 'medium' | 'bold' = 'regular';

  get computedClass(): string {
    return `font-${this.font} size-${this.size} ${this.weight} ${this.customClass}`;
  }
}
