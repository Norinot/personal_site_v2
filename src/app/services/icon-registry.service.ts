import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable, map, catchError, of, shareReplay } from 'rxjs';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { IconRegistry } from '../types';

@Injectable({
  providedIn: 'root',
})
export class IconRegistryService {
  private readonly sanitizer = inject(DomSanitizer);
  private readonly http = inject(HttpClient);
  private readonly icons = new Map<string, Observable<SafeHtml>>();

  registerIcon(name: IconRegistry, url: string): void {
    if (!this.icons.has(name)) {
      const icon$ = this.http.get(url, { responseType: 'text' }).pipe(
        map((svg) =>
          this.sanitizer.bypassSecurityTrustHtml(this.sanitizeSvg(svg))
        ),
        catchError((err) => {
          console.error(`Failed to load icon: ${name}`, err);
          return of(this.sanitizer.bypassSecurityTrustHtml(''));
        }),
        shareReplay(1)
      );
      this.icons.set(name, icon$);
    }
  }

  getIcon(name: string): Observable<SafeHtml> {
    const icon$ = this.icons.get(name);
    if (!icon$) {
      console.warn(`Icon not found: ${name}`);
      return of(this.sanitizer.bypassSecurityTrustHtml(''));
    }
    return icon$;
  }

  hasIcon(name: string): boolean {
    return this.icons.has(name);
  }

  private sanitizeSvg(svg: string): string {
    if (!svg.includes('xmlns="http://www.w3.org/2000/svg"')) {
      svg = svg.replace('<svg', '<svg xmlns="http://www.w3.org/2000/svg"');
    }
    return svg;
  }
}
