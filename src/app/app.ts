import { AfterViewInit, Component, OnDestroy, signal } from '@angular/core';
import { Sidebar } from './sections/sidebar';
import { Hero } from './sections/hero';
import { About } from './sections/about';
import { Skills } from './sections/skills';
import { Resume } from './sections/resume';
import { Portfolio } from './sections/portfolio';
import { Contact } from './sections/contact';
import { profile } from './profile';

@Component({
  selector: 'app-root',
  imports: [Sidebar, Hero, About, Skills, Resume, Portfolio, Contact],
  host: { '(window:scroll)': 'onScroll()' },
  templateUrl: './app.html',
})
export class App implements AfterViewInit, OnDestroy {
  protected readonly profile = profile;
  protected readonly year = new Date().getFullYear();
  protected readonly active = signal('hero');
  protected readonly scrolled = signal(false);
  private observer?: IntersectionObserver;

  ngAfterViewInit() {
    this.observer = new IntersectionObserver(entries => {
      for (const e of entries) if (e.isIntersecting) this.active.set(e.target.id);
    }, { rootMargin: '-45% 0px -50% 0px' });
    document.querySelectorAll('main section[id]').forEach(s => this.observer!.observe(s));
  }

  ngOnDestroy() {
    this.observer?.disconnect();
  }

  onScroll() {
    this.scrolled.set(window.scrollY > 100);
  }

  toTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
