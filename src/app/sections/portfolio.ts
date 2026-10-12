import { Component, computed, signal } from '@angular/core';
import { Reveal } from '../reveal';
import { filters, works } from '../profile';

@Component({
  selector: 'app-portfolio',
  imports: [Reveal],
  host: { '(document:keydown)': 'key($event)' },
  template: `
    <section id="portfolio" class="section light">
      <div class="container section-title" reveal>
        <h2>Portafolio</h2>
        <p>Algunos proyectos en los que he trabajado.</p>
      </div>
      <div class="container">
        <ul class="portfolio-filters" reveal="100">
          @for (f of filters; track f.key) {
            <li [class.filter-active]="filter() === f.key" (click)="filter.set(f.key)">{{ f.label }}</li>
          }
        </ul>
        <div class="portfolio-grid">
          @for (w of shown(); track w.image; let i = $index) {
            <div class="portfolio-item">
              <img [src]="w.image" [alt]="w.title" loading="lazy" />
              <div class="portfolio-info">
                <h4>{{ w.title }}</h4>
                <p>{{ w.text }}</p>
                <button class="preview-link" (click)="open.set(i)" aria-label="Ver imagen"><i class="bi bi-zoom-in"></i></button>
              </div>
            </div>
          }
        </div>
      </div>
    </section>
    @if (current(); as w) {
      <div class="lightbox" (click)="open.set(-1)">
        <button class="lb-close" aria-label="Cerrar"><i class="bi bi-x-lg"></i></button>
        <button class="lb-prev" (click)="move(-1, $event)" aria-label="Anterior"><i class="bi bi-chevron-left"></i></button>
        <figure (click)="$event.stopPropagation()">
          <img [src]="w.image" [alt]="w.title" />
          <figcaption><strong>{{ w.title }}</strong> · {{ w.text }}</figcaption>
        </figure>
        <button class="lb-next" (click)="move(1, $event)" aria-label="Siguiente"><i class="bi bi-chevron-right"></i></button>
      </div>
    }
  `,
})
export class Portfolio {
  protected readonly filters = filters;
  protected readonly filter = signal('*');
  protected readonly open = signal(-1);
  protected readonly shown = computed(() => works.filter(w => this.filter() === '*' || w.category === this.filter()));
  protected readonly current = computed(() => this.shown()[this.open()]);

  move(step: number, e?: Event) {
    e?.stopPropagation();
    const n = this.shown().length;
    this.open.set((this.open() + step + n) % n);
  }

  key(e: KeyboardEvent) {
    if (this.open() < 0) return;
    if (e.key === 'Escape') this.open.set(-1);
    if (e.key === 'ArrowRight') this.move(1);
    if (e.key === 'ArrowLeft') this.move(-1);
  }
}
