import {
  Directive,
  Input,
  ElementRef,
  HostListener,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appTooltip]',
})
export class TooltipDirective {
  @Input('appTooltip') tooltipText: string = '';
  private tooltipElement: HTMLElement | null = null;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('mouseenter') onMouseEnter() {
    if (this.tooltipText) {
      this.createTooltip();
      this.showTooltip();
    }
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.hideTooltip();
  }

  private createTooltip() {
    this.tooltipElement = this.renderer.createElement('div');
    this.renderer.addClass(this.tooltipElement, 'app-tooltip');

    // Capitalize the first letter
    const capitalizedText =
      this.tooltipText.charAt(0).toUpperCase() + this.tooltipText.slice(1);
    const textNode = this.renderer.createText(capitalizedText);
    this.renderer.appendChild(this.tooltipElement, textNode);

    this.renderer.appendChild(document.body, this.tooltipElement);
  }

  private showTooltip() {
    if (this.tooltipElement) {
      const hostPos = this.el.nativeElement.getBoundingClientRect();
      const tooltipHeight = this.tooltipElement.offsetHeight;
      const tooltipWidth = this.tooltipElement.offsetWidth;

      const top = hostPos.top - tooltipHeight - 8;
      const left = hostPos.left + hostPos.width / 2 - tooltipWidth / 2;

      this.renderer.setStyle(
        this.tooltipElement,
        'top',
        `${top + window.scrollY}px`
      );
      this.renderer.setStyle(
        this.tooltipElement,
        'left',
        `${left + window.scrollX}px`
      );
      this.renderer.setStyle(this.tooltipElement, 'opacity', '1');
      this.renderer.setStyle(this.tooltipElement, 'visibility', 'visible');
    }
  }

  private hideTooltip() {
    if (this.tooltipElement) {
      this.renderer.removeStyle(this.tooltipElement, 'opacity');
      this.renderer.removeStyle(this.tooltipElement, 'visibility');
      this.renderer.removeChild(document.body, this.tooltipElement);
      this.tooltipElement = null;
    }
  }
}
