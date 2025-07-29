import { CommonModule } from '@angular/common';
import {
  Component,
  HostBinding,
  inject,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { Observable, of } from 'rxjs';
import { IconRegistryService } from '../../services/icon-registry.service';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-icon',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './icon.component.html',
  styleUrl: './icon.component.scss',
})
export class IconComponent implements OnChanges {
  private iconRegistry = inject(IconRegistryService);
  private sanitizer = inject(DomSanitizer);
  icon$: Observable<SafeHtml> = of(this.sanitizer.bypassSecurityTrustHtml(''));

  @Input() name: string = '';
  @Input() size: string = '24px';
  @Input() color: string = 'currentColor';

  @HostBinding('style.width') get width() {
    return this.size;
  }
  @HostBinding('style.height') get height() {
    return this.size;
  }
  @HostBinding('style.color') get iconColor() {
    return this.color;
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['name'] && this.name) {
      this.icon$ = this.iconRegistry.getIcon(this.name);
    }
  }
}
