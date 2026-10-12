import { Directive, ElementRef, OnDestroy, OnInit, inject, input, numberAttribute, output } from '@angular/core';

@Directive({ selector: '[reveal]', host: { class: 'reveal' } })
export class Reveal implements OnInit, OnDestroy {
  private el = inject(ElementRef<HTMLElement>);
  readonly delay = input(0, { alias: 'reveal', transform: numberAttribute });
  readonly shown = output<void>();
  private observer?: IntersectionObserver;

  ngOnInit() {
    const node = this.el.nativeElement as HTMLElement;
    node.style.transitionDelay = `${this.delay() || 0}ms`;
    this.observer = new IntersectionObserver(entries => {
      if (entries.some(e => e.isIntersecting)) {
        node.classList.add('shown');
        this.shown.emit();
        this.observer?.disconnect();
      }
    }, { threshold: 0.15 });
    this.observer.observe(node);
  }

  ngOnDestroy() {
    this.observer?.disconnect();
  }
}
