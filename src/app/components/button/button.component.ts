import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
})
export class ButtonComponent {
  @Input() routerLink: string | any[] | null = null;
  @Input() variant: 'fancy' | 'default' = 'default';
  @Input() height: string = '';
  @Input() width: string = '';
  @Input() font: 'heading' | 'serif' | 'body' | 'mono' | 'vt323' = 'body';
  @Input() fontSize: string = '24px';

  @Input() set borderColor(value: string) {
    if (value) {
      this._borderColor = value;
    }
  }
  get borderColor(): string {
    return this._borderColor;
  }
  private _borderColor: string = '';

  @Input() set backgroundColor(value: string) {
    if (value) {
      this._backgroundColor = value;
    }
  }
  get backgroundColor(): string {
    return this._backgroundColor;
  }
  private _backgroundColor: string = '';

  @Input() set textColor(value: string) {
    if (value) {
      this._textColor = value;
    }
  }
  get textColor(): string {
    return this._textColor;
  }
  private _textColor: string = '';
}
